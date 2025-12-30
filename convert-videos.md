# 🎬 Convertir tes vidéos .mov en .mp4

Les vidéos `.mov` peuvent poser des problèmes de compatibilité sur certains navigateurs (notamment Android Chrome). Voici comment les convertir en `.mp4`:

## Option 1: En ligne (Recommandé - Plus simple)

### CloudConvert (Gratuit)
1. Va sur https://cloudconvert.com/mov-to-mp4
2. Glisse-dépose tes vidéos `.mov`
3. Clique sur "Convert"
4. Télécharge les fichiers `.mp4` convertis
5. Renomme-les en `hero-video-3.mp4`, `hero-video-4.mp4`, `hero-video-5.mp4`
6. Remplace les fichiers sur ton serveur OVH via FileZilla

## Option 2: Avec FFmpeg (Ligne de commande)

Si tu as FFmpeg installé sur ton ordinateur:

```bash
# Convertir une vidéo
ffmpeg -i hero-video-3.mov -vcodec h264 -acodec aac hero-video-3.mp4

# Convertir toutes les vidéos .mov du dossier
for file in *.mov; do
  ffmpeg -i "$file" -vcodec h264 -acodec aac "${file%.mov}.mp4"
done
```

### Installer FFmpeg:
- **macOS**: `brew install ffmpeg`
- **Windows**: Télécharge depuis https://ffmpeg.org/download.html
- **Linux**: `sudo apt install ffmpeg`

## Option 3: Avec HandBrake (Interface graphique)

1. Télécharge HandBrake: https://handbrake.fr/
2. Ouvre HandBrake
3. Glisse-dépose ta vidéo `.mov`
4. Sélectionne le preset "Web" → "Gmail Medium 5 Minutes 720p30"
5. Change le format de sortie en "MP4"
6. Clique sur "Start Encode"

## Option 4: VLC Media Player

1. Ouvre VLC
2. Menu → Média → Convertir/Enregistrer
3. Ajoute ton fichier `.mov`
4. Clique sur "Convertir/Enregistrer"
5. Profil: "Video - H.264 + MP3 (MP4)"
6. Choisis le nom de fichier de destination
7. Clique sur "Démarrer"

## Après la conversion

1. **Via FileZilla**:
   - Connecte-toi à `ssh.cluster031.hosting.ovh.net`
   - Va dans `/home/agenccs/agenccs/breizhcarclean/videos/`
   - Remplace les fichiers `.mov` par les `.mp4`

2. **Mets à jour le code** dans `src/components/Hero.tsx`:
   ```typescript
   const videos = [
     { src: '/videos/hero-video-1.mp4', alt: 'Nettoyage intérieur professionnel' },
     { src: '/videos/hero-video-2.mp4', alt: 'Résultat nettoyage automobile' },
     { src: '/videos/hero-video-3.mp4', alt: 'intérieur' }, // ✅ Converti
     { src: '/videos/hero-video-4.mp4', alt: 'latérale clean' }, // ✅ Converti
     { src: '/videos/hero-video-5.mp4', alt: 'Coffre propre' }, // ✅ Converti
   ];
   ```

3. **Commit et push**:
   ```bash
   git add src/components/Hero.tsx
   git commit -m "Switch to MP4 format for better compatibility"
   git push origin main
   ```

## Paramètres de compression recommandés

Pour des vidéos légères et rapides à charger:
- **Codec vidéo**: H.264
- **Résolution**: 1920x1080 (ou moins si fichier trop lourd)
- **Bitrate**: 2000-3000 kbps
- **Codec audio**: AAC (ou supprime l'audio puisque vidéos en muet)
- **Taille cible**: < 3 MB par vidéo

---

**Note**: Les vidéos `.mov` fonctionneront sur Safari et la plupart des navigateurs modernes, mais pas tous. Le `.mp4` est le format le plus universel pour le web.

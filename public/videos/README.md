# 📹 Dossier des Vidéos Hero

Ce dossier contient toutes les vidéos affichées dans le carrousel de la section Hero (page d'accueil).

## Comment ajouter une nouvelle vidéo

### Étape 1: Télécharger la vidéo via FileZilla

1. Connecte-toi à ton serveur OVH via FileZilla
2. Navigue vers le dossier: `/home/agenccs/agenccs/breizhcarclean/videos/`
3. Glisse-dépose tes vidéos dans ce dossier
4. Nomme tes vidéos de manière logique, par exemple:
   - `hero-video-3.mp4`
   - `hero-video-4.mp4`
   - `detailing-interieur.mp4`
   - etc.

### Étape 2: Ajouter la vidéo dans le code

1. Ouvre le fichier: `src/components/Hero.tsx`
2. Trouve la section `const videos = [...]`
3. Ajoute une nouvelle ligne avec ta vidéo:

```javascript
const videos = [
  { src: '/videos/hero-video-1.mp4', alt: 'Nettoyage intérieur professionnel' },
  { src: '/videos/hero-video-2.mp4', alt: 'Résultat nettoyage automobile' },
  { src: '/videos/hero-video-3.mp4', alt: 'Description de ta nouvelle vidéo' }, // 👈 Nouvelle vidéo
];
```

4. Commit et push les changements vers GitHub
5. Le déploiement automatique mettra à jour le site

## Format recommandé des vidéos

- **Format**: MP4 (H.264)
- **Résolution**: 1920x1080 (Full HD) minimum
- **Durée**: 5-15 secondes recommandé
- **Taille**: < 5 MB par vidéo (compressée pour le web)
- **Ratio**: 16:9 (paysage)

## Outils de compression vidéo

Si tes vidéos sont trop lourdes, utilise:
- **HandBrake** (gratuit): https://handbrake.fr/
- **FFmpeg** en ligne de commande
- **CloudConvert** (en ligne): https://cloudconvert.com/

## Notes importantes

- Les vidéos sont lues en boucle et en mode muet automatiquement
- Le carrousel change de vidéo toutes les 10 secondes
- Les vidéos doivent être au format `.mp4` pour une compatibilité maximale

---

**Dernière mise à jour**: 30 décembre 2025

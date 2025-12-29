# Configuration du Déploiement Automatique OVH

Ce document explique comment configurer le déploiement automatique vers votre serveur OVH.

## 📋 Prérequis

- Accès au serveur OVH via SSH
- Accès au repository GitHub (droits d'administration)
- Clé SSH pour l'authentification

## 🔐 Étape 1 : Générer une clé SSH

Si tu n'as pas encore de clé SSH pour le déploiement, génère-en une :

```bash
# Sur ton ordinateur local
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/ovh_deploy

# Afficher la clé publique (à copier)
cat ~/.ssh/ovh_deploy.pub

# Afficher la clé privée (à garder secrète)
cat ~/.ssh/ovh_deploy
```

## 📤 Étape 2 : Ajouter la clé publique sur OVH

1. Connecte-toi à ton serveur OVH :
```bash
ssh agenccs@ssh.cluster031.hosting.ovh.net
```

2. Ajoute la clé publique au fichier authorized_keys :
```bash
# Créer le dossier .ssh s'il n'existe pas
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Ajouter la clé publique
echo "COLLE_TA_CLE_PUBLIQUE_ICI" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

3. Teste la connexion SSH avec la clé privée :
```bash
# Depuis ton ordinateur
ssh -i ~/.ssh/ovh_deploy agenccs@ssh.cluster031.hosting.ovh.net
```

## 🔒 Étape 3 : Configurer les Secrets GitHub

1. Va sur ton repository GitHub : https://github.com/BenBro4Web3/breizh-car-cleanfr

2. Clique sur **Settings** → **Secrets and variables** → **Actions**

3. Clique sur **New repository secret** et ajoute les secrets suivants :

### Secret 1 : `OVH_SSH_HOST`
```
ssh.cluster031.hosting.ovh.net
```

### Secret 2 : `OVH_SSH_USER`
```
agenccs
```

### Secret 3 : `OVH_SSH_KEY`
```
-----BEGIN OPENSSH PRIVATE KEY-----
[Colle ici le contenu COMPLET de ta clé privée]
-----END OPENSSH PRIVATE KEY-----
```
⚠️ **Important** : Copie tout le contenu du fichier `~/.ssh/ovh_deploy` (clé privée)

### Secret 4 : `OVH_REMOTE_PATH`
```
/home/agenccs/agenccs/breizhcarclean
```

## ✅ Étape 4 : Vérifier la configuration

Une fois les secrets configurés, le déploiement automatique sera actif.

### Test du déploiement :

1. **Méthode automatique** : Pousse un commit sur la branche `main`
```bash
git add .
git commit -m "Test déploiement OVH"
git push origin main
```

2. **Méthode manuelle** :
   - Va sur GitHub → **Actions**
   - Sélectionne le workflow **"Deploy to OVH"**
   - Clique sur **"Run workflow"**

## 📊 Suivi du déploiement

1. Va dans l'onglet **Actions** de ton repository GitHub
2. Tu verras l'exécution du workflow en temps réel
3. Vérifie que toutes les étapes sont vertes ✅

## 🐛 Dépannage

### Erreur : "Permission denied (publickey)"
- Vérifie que la clé publique est bien dans `~/.ssh/authorized_keys` sur OVH
- Vérifie que la clé privée complète est dans le secret `OVH_SSH_KEY`

### Erreur : "No such file or directory"
- Vérifie que le chemin `/home/agenccs/agenccs/breizhcarclean` existe sur OVH
- Crée le dossier si nécessaire :
```bash
mkdir -p /home/agenccs/agenccs/breizhcarclean
```

### Le site ne se met pas à jour
- Vérifie que le dossier de destination est bien le document root de ton domaine
- Vérifie les permissions du dossier :
```bash
chmod 755 /home/agenccs/agenccs/breizhcarclean
```

## 🎯 Workflow de développement

1. Fais tes modifications en local
2. Teste avec `npm run dev`
3. Commit et push sur GitHub
4. GitHub Actions build et déploie automatiquement
5. Ton site est mis à jour en quelques minutes sur https://breizh-car-clean.fr/

## 📝 Notes importantes

- Le déploiement se déclenche **automatiquement** à chaque push sur `main`
- Les fichiers sont déployés dans le dossier `/home/agenccs/agenccs/breizhcarclean`
- Le build génère les fichiers dans le dossier `dist/`
- Seuls les fichiers buildés sont envoyés sur le serveur (pas le code source)

## 🔗 Ressources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [SFTP Deploy Action](https://github.com/wlixcc/SFTP-Deploy-Action)
- [OVH Documentation SSH](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/)

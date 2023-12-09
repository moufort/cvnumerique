# Utilise une image de Nginx légère comme image de base
FROM nginx:alpine

# Copie le fichier index.html dans le répertoire de base de Nginx
COPY index.html /usr/share/nginx/html

# Nginx est configuré pour écouter sur le port 80 par défaut, pas besoin d'EXPOSE

# Aucune autre configuration n'est nécessaire, Nginx sert automatiquement le contenu statique

# Aucune commande CMD nécessaire car l'image Nginx par défaut fait déjà cela

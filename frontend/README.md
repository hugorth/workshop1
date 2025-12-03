# EC2 Frontend Demo

Cette application web simple se connecte à un backend Node.js hébergé sur AWS EC2.

## 🚀 Fonctionnalités

- Interface web moderne et responsive
- Connexion à l'API EC2 via fetch
- Affichage du message depuis le backend
- Gestion des erreurs

## 📋 Prérequis

- Un backend Node.js tournant sur EC2 (port 3000)
- CORS activé sur le backend
- Security Group AWS autorisant le port 3000

## 🎯 Utilisation

1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur le bouton "Fetch Message from EC2"
3. Le message du backend s'affichera

## 🔧 Configuration

Dans `index.html`, modifiez la ligne suivante avec votre IP EC2 :

```javascript
const EC2_PUBLIC_IP = "51.20.192.89"; // Remplacez par votre IP
```

## 📡 API Endpoint

```
GET http://YOUR_EC2_IP:3000/api/message
```

Réponse :
```json
{
  "message": "Hello from EC2!"
}
```

## 🌐 Déploiement

Vous pouvez :
- Ouvrir directement `index.html` dans un navigateur
- Héberger sur GitHub Pages
- Déployer sur Netlify, Vercel, etc.

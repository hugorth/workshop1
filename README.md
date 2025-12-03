# Workshop 1 - EC2 Backend + Frontend

Ce projet démontre une application full-stack simple avec :
- **Backend** : API Node.js/Express hébergée sur AWS EC2
- **Frontend** : Page web HTML/JavaScript qui consomme l'API

## 📁 Structure du projet

```
workshop1/
├── backend/           # API Node.js sur EC2
│   ├── server.js
│   ├── package.json
│   └── .gitignore
├── frontend/          # Interface web
│   ├── index.html
│   └── README.md
└── nuxt-app/          # Application Nuxt (optionnelle)
```

## 🚀 Backend (EC2)

### Technologies
- Node.js
- Express
- CORS

### API Endpoint
```
GET /api/message
```

Retourne :
```json
{
  "message": "Hello from EC2!"
}
```

### Déploiement sur EC2

1. **Installer Node.js sur EC2**
```bash
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

2. **Copier les fichiers**
```bash
scp -i votre-cle.pem backend/server.js backend/package.json ec2-user@YOUR_IP:~/
```

3. **Installer et lancer**
```bash
ssh -i votre-cle.pem ec2-user@YOUR_IP
npm install
node server.js
```

4. **Configuration Security Group AWS**
   - Port 22 (SSH)
   - Port 3000 (API)
   - Port 80 (HTTP) optionnel

## 🌐 Frontend

### Utilisation

1. Ouvrez `frontend/index.html` dans votre navigateur
2. Cliquez sur "Fetch Message from EC2"
3. Le message du backend s'affiche

### Configuration

Modifiez l'IP EC2 dans `index.html` :
```javascript
const EC2_PUBLIC_IP = "VOTRE_IP_EC2";
```

## 📝 Notes

- Le backend doit écouter sur `0.0.0.0` pour être accessible depuis l'extérieur
- CORS doit être activé pour permettre les requêtes cross-origin
- Le Security Group AWS doit autoriser le port 3000

## 🔗 Liens utiles

- [Documentation Express](https://expressjs.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

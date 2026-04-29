# 🎯 Guía Rápida - Publicar en Netlify (5 minutos)

## Pasos Simples:

### 1️⃣ Descarga el Código
- En Emergent, haz clic en **"Download Code"**
- Se descargará un archivo ZIP con todo el proyecto

### 2️⃣ Sube a GitHub
- Ve a [github.com](https://github.com) y crea una cuenta si no tienes
- Click en **"New repository"**
- Nombre: `cuadras-chiguergue-web`
- Marca "Public"
- Click **"Create repository"**
- Sube el código (puedes usar GitHub Desktop o la web)

### 3️⃣ Conecta con Netlify
- Ve a [netlify.com](https://netlify.com)
- Click **"Sign up"** con tu cuenta de GitHub
- Click **"Add new site"** → **"Import an existing project"**
- Selecciona **GitHub**
- Busca tu repositorio: `cuadras-chiguergue-web`

### 4️⃣ Configuración (Automática)
Netlify detectará automáticamente todo gracias al archivo `netlify.toml`:
- ✅ Base directory: `frontend`
- ✅ Build command: `yarn build`
- ✅ Publish directory: `build`

**Solo haz click en "Deploy site"**

### 5️⃣ ¡Listo!
- En 2-3 minutos tu sitio estará en línea
- URL automática: `nombre-random-123.netlify.app`
- Puedes cambiar el nombre en Settings → Domain management

---

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar `www.cuadraschiguergue.com`:

1. En Netlify: **Settings** → **Domain management**
2. Click **"Add custom domain"**
3. Escribe: `cuadraschiguergue.com`
4. Netlify te dará instrucciones para tu proveedor de dominios
5. Configura los registros DNS (A o CNAME)
6. ¡Listo! Tu sitio estará en tu dominio

---

## 💡 Consejos

✅ **Gratis para siempre** - No caduca
✅ **HTTPS automático** - Seguro por defecto
✅ **Actualizaciones** - Cada vez que subas cambios a GitHub, se actualiza solo
✅ **Sin mantenimiento** - Netlify se encarga de todo

---

## ❓ ¿Necesitas Ayuda?

- Tutorial en video de Netlify: https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
- Documentación: https://docs.netlify.com/

**¡Tu sitio de Cuadras Chiguergue estará en línea en menos de 5 minutos! 🚀**

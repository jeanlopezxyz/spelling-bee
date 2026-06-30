# 🐝 Spelling Bee — P5 Word List

Web educativa para practicar el deletreo y la **pronunciación** de inglés (Primary 5, 120 palabras). Hecha para que un niño escuche, deletree y aprenda cada palabra.

## ✨ Funciones

- 🔊 **Dictado con voz natural** (ElevenLabs — voz británica "Alice"), **pre-generado y offline**.
- 🔤 **Deletreo letra por letra** (audio claro y pausado).
- 💬 **Frase de ejemplo** por cada palabra.
- ⌨️ **Modo Practice** — escribe el deletreo; las letras aparecen en vivo (🟢 bien / 🔴 mal) y las palabras pasan solas al acertar.
- 📝 **Modo Exam** — sin pistas, con **nota final** y lista de palabras a repasar.
- 🎤 **Modo Say it** — el niño dice la palabra y la app **corrige su pronunciación** (reconocimiento de voz, juzga por sonido con algoritmo fonético Soundex).
- 🏆 Progreso guardado en el dispositivo, racha, repetición espaciada y temas (Music, Food, Numbers…).

## 🎧 Audio

Todo el audio está pre-generado con ElevenLabs (modelo `eleven_multilingual_v2`, voz Alice `en-GB`) y se reproduce **sin internet**:

```
audio/
├── word/      (0–119.mp3)  → pronunciación de la palabra
├── spell/     (0–119.mp3)  → deletreo letra por letra
└── sentence/  (0–119.mp3)  → frase de ejemplo
```

> ✅ Pronunciación y deletreo **verificados con IA** (ElevenLabs Scribe STT): 120/120 correctos.

Solo el **modo "Say it"** (escuchar al niño para corregir) necesita internet y una API key de ElevenLabs, que se pega en el botón ⚙ y se guarda **solo en el dispositivo** (nunca en el código).

## 🚀 Uso

Abrí `index.html` en **Google Chrome** (doble clic). O serví la carpeta:

```bash
python3 -m http.server 8000
# luego abrí http://localhost:8000
```

## 🛠️ Stack

HTML + CSS + JavaScript puro (un solo archivo, sin dependencias ni build). Audio: ElevenLabs. Reconocimiento de voz: ElevenLabs Scribe + Web Speech API (respaldo).

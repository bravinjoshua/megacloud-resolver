# MegaCloud TV to M3U8 Resolver

A lightweight API that extracts `.m3u8` streaming links from MegaCloud TV using a MegaCloud TV ID. The service is powered by **Puppeteer** for dynamic content extraction and is hosted on **Render** for demo purposes.

> ⚠ **Note:** The free instance on Render will **spin down** due to inactivity, which may cause **delays of 50 seconds or more**. Additionally, **MegaCloud TV IDs expire after a certain period**, so extracted links are not permanent.

---

## 📌 Table of Contents

- [Introduction](#introduction)
- [API Usage](#api-usage)
- [How It Works](#how-it-works)
- [Local Development](#local-development)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)
- [Disclaimer](#disclaimer)

---

## 🔹 Introduction

This API allows you to retrieve `.m3u8` streaming links by providing a **MegaCloud TV ID** (e.g., `Wc3rcZdVwikO?k=1`). It uses **Puppeteer** to dynamically scrape and extract the `.m3u8` link from MegaCloud’s embed page.

🚀 **Demo API Endpoint:**

```
https://megacloud-resolver.onrender.com/api/resolve?id=
```

---

## 🔗 API Usage

To use the API, append the **MegaCloud TV ID** to the base URL.

### ✅ Example Request

```bash
GET https://megacloud-resolver.onrender.com/api/resolve?id=IG37fwadA6iU
```

### 📥 Example Response

```json
{
  "success": true,
  "data": {
    "sources": [
      {
        "default": false,
        "type": "hls",
        "file": "https://w2r.biananset.net/_v7/dc99f44574209e253e9c75125b9cd5927d8cf8ebca6b31eb8578ef5f979b6aed6c4ff7dd482f73c25e2edfdd32ea47445485f73f2e04e168897b6cf6cd66a47e6a089503315ad28c670469491676132f1c6866f46b506f958929fe9fa321734482ce713d6c231262a01d6c266e9da174760b15c4bc628d5ad88351c3d3bfdc86/master.m3u8",
        "label": "0",
        "preload": "metadata"
      }
    ],
    "tracks": [
      {
        "file": "https://s.megastatics.com/subtitle/33b48869230e19e5838dadb3dfdcc3dc/eng-2.vtt",
        "label": "English",
        "kind": "captions",
        "default": true
      }
    ]
  }
}
```

### ❌ Error Response

```json
{
  "success": false,
  "error": "Unable to resolve"
}
```

---

## ⚙️ How It Works

This API leverages **Puppeteer** to:

1. Launch a headless browser and navigate to the MegaCloud embed page for the provided TV ID.
2. Wait for the page to load and extract the `.m3u8` streaming link and subtitles.
3. Close the browser and return the extracted data in JSON format.

Example flow:

- Given ID `Wc3rcZdVwikO?k=1`, the API visits:
  ```
  https://megacloud.tv/embed-2/e-1
  ```
- Puppeteer scrapes the `.m3u8` link and subtitles from the page.
- The extracted links are returned in the API response.

---

## 💻 Local Development

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BravinJoshua/megacloud-resolver.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd megacloud-resolver
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start or  npm run dev
   ```

5. **Test the API locally:**

   ```bash
   curl http://localhost:3000/api/resolve?id=Wc3rcZdVwikO?k=1
   ```

---

## ⭐ Key Features

✔ **Puppeteer-Powered** – Uses headless browser automation to extract `.m3u8` links.  
✔ **Simple API** – Just append the **MegaCloud TV ID** to the URL.  
✔ **Subtitle Support** – Extracts and provides subtitle `.vtt` files.  
✔ **Performance Varies** – **Speed depends on CPU allocation** in the hosting environment.  
✔ **Decent Availability** – Hosted on **Render**, but the free instance may experience delays.  
✔ **JSON Response** – Easy to integrate into applications.
✔ **Dockerfile** - A Dockerfile is available for self-hosting the service in a container

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## 🎖 Credits

This project was inspired by **[luslucifer/megaTube-resolver](https://github.com/luslucifer/megaTube-resolver)**.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## ⚠️ Disclaimer

This API is intended for **educational and personal use only**. The developers are **not responsible** for any misuse or violations of MegaCloud TV’s terms of service. Use it at your own risk.

---

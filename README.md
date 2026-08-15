# Learnmark Website

This is the official website for Learnmark's expert research and consultation services, built with [Next.js 16](https://nextjs.org/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Features

- **Modern Tech Stack**: Built on Next.js 16 (App Router) and React 19.
- **Responsive Design**: Fully responsive UI using Tailwind CSS v4 and Headless UI.
- **Managed Consultation Journey**: Client services, project workflow, expert network, compliance, and project intake pages.
- **Reusable Service Components**: Shared page, navigation, metadata, and JSON-LD patterns for the core service routes.
- **API Routes**:
  - `/api/contact`: Handles contact form submissions.
  - `/api/subscribe`: Handles newsletter subscriptions.
  - Data is currently stored locally in JSON files (`data/`).
- **Dockerized**: Includes optimized `Dockerfile` for production deployment.

## Project Structure

```text
├── app/                # App Router pages and API routes
│   ├── api/            # Backend API endpoints
│   ├── about/          # About page
│   ├── for-clients/    # Client service overview
│   ├── how-it-works/   # Managed consultation workflow
│   ├── experts/        # Expert network participation
│   ├── compliance/     # Consultation compliance
│   └── ...
├── components/         # Reusable React components
├── data/               # Local storage for form submissions (JSON)
├── public/             # Static assets
└── ...
```

## Internationalization

Internationalization is enabled for English, Simplified Chinese, Traditional Chinese, Japanese, French, and German. The active locale is resolved from the `learnmark-locale` cookie, then the browser `Accept-Language` header, with English as the fallback. The language switcher refreshes the current route without adding locale prefixes.

All user-facing changes must update every locale, including metadata, accessibility labels, form feedback, and JSON-LD. This prefix-free, cookie-based strategy requires a Next.js server runtime; static export is not a supported production mode for internationalized releases. See `.github/copilot-instructions.md` for the full development rules.

## Getting Started

### Local Development

1. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

2. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

### Docker Build

To build and run the application using Docker:

1. Build the image:

    ```bash
    docker build -t learnmark-website .
    ```

2. Run the container (with data persistence):

    ```bash
    docker run -p 3000:3000 -v $(pwd)/data:/app/data learnmark-website
    ```

    *Note: Mounting the volume ensures that contact form submissions and newsletter subscriptions are saved to your local `data` directory and persist across container restarts.*

## Deployment

The GitHub Actions workflow publishes both editions on every push to `main`:

- **GitHub Pages** builds with `BUILD_OUTPUT_MODE=export`. It serves the English edition and hides the language switcher because static hosting cannot resolve the locale cookie on the server.
- **Docker server** builds the default standalone output. It serves all six locales and displays the language switcher. The image is pushed as both `learnmark/website:latest` and `learnmark/website:<commit-sha>`.

The server deployment reuses these repository secrets:

- `DOCKER_HUB_USERNAME`
- `DOCKER_HUB_PASSWORD`
- `DEMO_SERVER_IP`
- `DEMO_SERVER_PORT`
- `DEMO_SERVER_USERNAME`
- `DEMO_SERVER_PASSWORD`

The deployment maps server port `90` to container port `3000`, persists `/app/data` in the `learnmark-data` Docker volume, checks container health, and rolls back to the previous container if the new image does not become healthy. DNS remains external to the workflow, so the public domain can be switched manually between the Pages and server deployments.

The application can also run on Vercel or another container orchestration platform using the provided Dockerfile.

**Important Note for Vercel/Serverless:**
The current implementation uses the local filesystem (`/data`) to store form submissions. This **will not work** on serverless platforms like Vercel where the filesystem is ephemeral. For serverless deployments, please update the API routes (`app/api/*`) to use an external database (e.g., MongoDB, PostgreSQL) or an email service.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

# Stat Front

Stat Front is a React-based frontend application designed to display statistics for League of Legends champions. It provides users with an interactive interface to select champions and view their performance metrics, such as win rates, presence rates, and total games played.

## Project Structure

The project is organized as follows:

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   └── championSelector.tsx
└── utilities/
    └── championData.ts
```

### Key Files

- **`app/page.tsx`**: The main entry point for the application. It fetches basic statistics and integrates the `ChampionSelector` component to display champion-specific stats.
- **`components/championSelector.tsx`**: A reusable component that allows users to select champions and fetch their statistics from an external API.
- **`utilities/championData.ts`**: Contains static data for League of Legends champions, including their names, icons, and images.

## Features

- **Champion Selection**: Users can select champions from a predefined list.
- **Statistics Display**: Displays win rates, presence rates, and other performance metrics for selected champions.
- **API Integration**: Fetches real-time statistics from an external API (`https://api.skidhub.fr/stats`).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/stat_front.git
   cd stat_front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. Navigate to the homepage.
2. View basic statistics for all games.
3. Use the `ChampionSelector` component to select champions and view their specific stats.
4. Click the floating "About" button to learn more about the application.

## API Endpoints

- **Basic Stats**: `https://api.skidhub.fr/stats/basic`
- **Champion Stats**: `https://api.skidhub.fr/stats`

## Technologies Used

- **React**: Frontend framework.
- **TypeScript**: For type safety.
- **Tailwind CSS**: For styling.
- **Next.js**: For server-side rendering and routing.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Data and assets are sourced from [Riot Games](https://www.riotgames.com/).
- API hosted at `https://api.skidhub.fr`.


# Tokushima University Course Planner

A web-based tool for Tokushima University students to plan their academic journey based on their dream occupation.

## Features

- Occupation-based course planning
- Visual roadmap generation
- AI-powered subject recommendations
- Modern, responsive UI

## Tech Stack

- Frontend: Next.js 14 with TypeScript and Tailwind CSS
- Backend: Next.js API Routes
- AI Integration: Google Gemini API
- Deployment: Vercel

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd tokushima-course-planner
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Google Gemini API key:
```
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `src/app/page.tsx` - Main application page
- `src/app/api/roadmap/route.ts` - API endpoint for roadmap generation
- `src/types/index.ts` - TypeScript type definitions
- `src/data/sampleData.ts` - Sample data for development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 

# CitizenPaths - AI-Powered Citizenship by Investment Solutions

A sophisticated Next.js TypeScript application that provides personalized citizenship by investment recommendations using real-time data and AI-powered matching algorithms.

## 🚀 Features

- **AI-Powered Recommendations**: Intelligent matching algorithm analyzes user preferences
- **Real-Time Data**: Current citizenship program information and requirements
- **Single-Page Experience**: No-scroll questionnaire design
- **TypeScript**: Full type safety and developer experience
- **Responsive Design**: Works perfectly on desktop and mobile
- **GitHub Codespaces Ready**: Zero-config development environment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom Helicon View inspired design
- **Icons**: Lucide React
- **Development**: GitHub Codespaces optimized
- **Deployment**: Vercel ready

## 🏃‍♂️ Quick Start

### GitHub Codespaces (Recommended)

1. Open this repository in GitHub Codespaces
2. Wait for automatic setup (dependencies install automatically)
3. Run `npm run codespaces` to start development server
4. Open the forwarded port 3000

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
/
├── .devcontainer/          # GitHub Codespaces configuration
├── .vscode/               # VS Code settings and extensions
├── public/                # Static assets
│   ├── images/           # Image assets
│   ├── favicon.ico       # Site favicon
│   └── robots.txt        # SEO robots file
├── src/
│   ├── components/       # React components
│   ├── pages/           # Next.js pages and API routes
│   ├── styles/          # CSS and styling
│   ├── types/           # TypeScript type definitions
│   └── lib/             # Utility functions
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment configuration
```

## 🎨 Design System

The application uses a sophisticated design system inspired by Helicon View:

- **Colors**: Dark grays and matte blacks with professional contrast
- **Typography**: Crimson Text (headings) + Inter (body)
- **Layout**: Single-page, no-scroll questionnaire experience
- **Components**: Reusable TypeScript components with proper typing

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run codespaces` - Start development server for GitHub Codespaces
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. No additional configuration needed

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔒 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_API_URL=your_api_endpoint
NEXT_PUBLIC_SITE_URL=your_site_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking: `npm run type-check`
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support and questions, please contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS


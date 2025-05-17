# EasyLinks Chrome extension

This extension allows you to have service links at hand and at the same time be able to see the status of it.

![Screenshot 2025-04-13 at 02 11 49](https://github.com/user-attachments/assets/1865f639-c526-407b-bcf0-da3669c2a761)

## Features

- Quick access to your service environments
- Real-time status monitoring of services
- Visual status indicators (red, yellow, green)
- Easy configuration through extension-config.json
- Clean and minimal UI

## Development

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

1. Run the build command:

   ```bash
   npm run build
   ```

2. The built extension will be available in the `chrome_extension` folder

## Installation

1. After building the extension, open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `chrome_extension` folder that was created after running the build command

## Configuration

### Using extension-config.json

The extension can be configured through the `extension-config.json` file. This file allows you to:

1. Define your service environments
2. Set up custom URLs
3. Configure status check intervals
4. Customize the appearance

Example configuration:

```json
{
  "logo": "",
  "items": [
    {
      "name": "Service 1",
      "links": [
        {
          "name": "Link 1",
          "url": "https://www.link1.com"
        }
      ]
    },
    {
      "name": "Service 2",
      "links": [
        {
          "name": "Link 1",
          "url": "https://www.link1.com"
        },
        {
          "name": "Link 2",
          "url": "https://www.link2.com"
        }
      ]
    }
  ]
}
```

### Manifest Configuration

The `manifest.json` file in the `public` folder is crucial for the extension's functionality. It defines:

- Extension name and description
- Version number
- Required permissions
- Icons and assets
- Popup configuration

Key manifest properties:

```json
{
  "manifest_version": 3,
  "name": "EasyLinks",
  "version": "1.0.0",
  "description": "Quick access to service environments",
  "action": {
    "default_popup": "index.html"
  },
  "icons": {
    "32": "logo.png",
    "128": "logo_square.png"
  }
}
```

## Customization

### Icons and Branding

The extension uses two main icons:

- `logo.png` (32x32) - Used in the Chrome toolbar
- `logo_square.png` (128x128) - Used in the Chrome Web Store and extension management page

To customize the icons:

1. Replace the existing icons in the `public` folder
2. Ensure the new icons match the required dimensions
3. Update the `manifest.json` if you change the icon filenames

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request

When contributing, please:

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep pull requests focused and concise

## AI tools used

- Bolt.new
- ChatGPT
- Cursor

## License

This project is licensed under the MIT License - see the LICENSE file for details.

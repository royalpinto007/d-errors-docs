# d-errors-docs

A comprehensive documentation website for understanding and resolving errors in the **D programming language**. This project provides detailed explanations, examples, and solutions for various error types, along with advanced debugging techniques and contributor-focused content.

## Features

- **Error Codes Documentation**: In-depth coverage of error codes, including causes and resolutions.
- **General Section**: Overview and resources for error handling in D.
- **Advanced Topics**: Information on SARIF support, custom error handling, and reporting utilities.
- **Contributor-Friendly**: Includes FAQs, a glossary, and guidelines for contributing.
- **Interactive and Organized**: Well-structured navigation for seamless user experience.

## Installation

Use Node.js 22.23.4 or newer (Node.js 24 LTS is supported). The patched Astro
and Svelte integration versions require this minimum.

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/royalpinto007/d-errors-docs.git
   cd d-errors-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4321
   ```

## Dependency security

The security update removes the unused Node server adapter; this site uses the
Vercel adapter for its documentation routes. Astro, its integrations and the lockfile are
updated together, and the typography selector parser is constrained to a patched
6.x release.

One upstream advisory remains: [GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)
affects `deepmerge`, used by the Svelte Vite plugin to merge build configuration.
As of 14 November 2026, no patched release is published. `npm audit` reports this
as three low findings including the two dependent packages. Do not merge
untrusted configuration or run builds from untrusted changes with credentials.
The advisory is not dismissed or hidden; update the plugin when a patched
dependency becomes available. Run `npm audit`, `npm run build` and
`npm run test:built` after updates. The smoke test renders all documentation
routes through the built Vercel handler and checks the generated search index.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch for your changes.
3. Submit a pull request detailing your contribution.

For detailed contributing guidelines, refer to the [Contributing Documentation](./src/content/docs/contributing.mdx).

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## Acknowledgments

Special thanks to:
- **[Walter Bright](https://dlang.org/)** for foundational work on the D programming language.
- All contributors to the [D ecosystem](https://github.com/dlang-community).

## Contact

For questions or feedback, please reach out via [GitHub Issues](https://github.com/royalpinto007/d-errors-docs/issues).

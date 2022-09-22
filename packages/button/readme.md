![React Email button cover](https://react-email-assets.vercel.app/button.png)

<div align="center"><strong>@react-email/button</strong></div>
<div align="center">A React button component to help build emails.</div>
<br />
<div align="center">
<a href="https://react.email">Website</a> 
<span> · </span>
<a href="https://github.com/zenorocha/react-email">GitHub</a> 
<span> · </span>
<a href="https://react.email/discord">Discord</a>
</div>

## Install

Install component from your command line.

#### With yarn

```sh
yarn add @react-email/button -E
```

#### With npm

```sh
npm install @react-email/button -E
```

## Getting started

Add the component to your email template. Include styles where needed.

```jsx
import { Button } from '@react-email/button';

const Email = () => {
  return (
    <Button href="https://example.com" style={{ color: '#61dafb' }}>
      Click me
    </Button>
  );
};
```

## Props

| Name   | Type   | Default  | Description |
| --     | --     | --       | --          |
| href   | string |          | Link to be triggered when the button is clicked |
| target | string | `_blank` | Specify the target attribute for the button link	 |

## License

MIT License

import markdown from 'markdown-in-js'
import asset from 'next/asset'
import withDoc, { components } from '../../../lib/with-doc'

import { shawwn } from '../../../lib/data/team'
import {
  TerminalInput,
  TerminalOutput
} from '../../../components/text/terminal'
import { HR } from '../../../components/text/paragraph'
import Image from '../../../components/image'
import Now from '../../../components/now/now'

// prettier-ignore
export default withDoc({
  title: 'Five Minute Guide',
  date: '30 April 2018',
  authors: [shawwn],
  editUrl: 'pages/docs/getting-started/five-minute-guide-to-now.js',
})(markdown(components)`

Niltree can run any kind of WebGL website, twice as fast as Chrome. You can get this up and running in under five minutes.

This guide will show you how to install Niltree and open a WebGL site.


## Installing Niltree

### Step 1: Install Node >= 9.9

Ensure you have [Node >= 9.9](https://nodejs.org/en/download/):

${
  <TerminalOutput>
    <pre>
      {`$ node --version
v9.9.0`}
    </pre>
  </TerminalOutput>
  }

> If you don't have [Node >= 9.9](https://nodejs.org/en/download/), you can use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to install it.

### Step 2: Install Windows build tools

If you're on Windows, install [windows-build-tools](https://www.npmjs.com/package/windows-build-tools) from a PowerShell Admin prompt:

${<TerminalInput>npm install --global --production windows-build-tools</TerminalInput>}

> To start a PowerShell Admin prompt, right-click on PowerShell and run "as Administrator".

### Step 3: Install Niltree

${<TerminalInput>npm i -g niltree</TerminalInput>}

${<Now color="#000"/>} will deploy the app and give you a URL as shown below.

${<Image
  src={asset(`${IMAGE_ASSETS_URL}/docs/five-minute-guide-to-now/deploy.png`)}
  width={650}
  height={255}
  caption="Getting a unique URL after the deployment."
/>}

This is a URL for the current deployment of the app. You can access this version of the app anytime with this URL.

## Domain Name

Now you have a unique URL(<https://my-web-app-avvuiuuwto.now.sh>) for your app. But you probably want a nicer-sounding URL before directing your users there. The next step is to map the "now.sh" URL to a domain name that you prefer.

Let's assume the domain name is \`my-web-app.com\`, and you haven't bought it yet. <br/>
To map this domain name to the app's unique URL, run this command:

${<TerminalInput>now alias https://my-web-app-avvuiuuwto.now.sh my-web-app.com</TerminalInput>}

Since you haven't bought the domain name yet, you will be asked to enter your credit card information to buy it.
You can do that by running this command:

${<TerminalInput>now cc add</TerminalInput>}

You may choose to upgrade your account to the "Premium" plan by running this command:

${<TerminalInput>now upgrade</TerminalInput>}

Now, run the domain mapping command again and follow these instructions:

${<TerminalInput>now alias https://my-web-app-avvuiuuwto.now.sh my-web-app.com</TerminalInput>}

Once you've done that, you'll be able to access your app using <https://my-web-app.com>.
It is automatically configured with a [Let's Encrypt](https://letsencrypt.org/) SSL certificate and served with HTTPS.

${<Image
  src={asset(`${IMAGE_ASSETS_URL}/docs/five-minute-guide-to-now/domain-setup.png`)}
  width={650}
  height={412}
  caption="After mapping a domain name to a deployment."
/>}

## Updates

If you've made any changes to your app, you will need to deploy the latest version of your app. To do that, run this command:

${<TerminalInput>now</TerminalInput>}

You will receive a unique URL for this deployment. Let's assume that the new URL is <https://my-web-app-ttfxzqwbwz.now.sh>.

You can map this new URL to your domain name by running this command:

${<TerminalInput>now alias https://my-web-app-ttfxzqwbwz.now.sh my-web-app.com</TerminalInput>}

Now everything is ready.<br/>
Your users can access the updated web app at <https://my-web-app.com>.

${<HR />}

These are just a few things you can do with ${<Now color="#000"/>}. To learn more about ${<Now color="#000"/>}, simply follow the rest of the docs.
`)

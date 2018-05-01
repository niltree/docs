import markdown from 'markdown-in-js'
//import asset from 'next/asset'
import withDoc, { components } from '../../../lib/with-doc'

import { shawwn } from '../../../lib/data/team'
import {
  TerminalInput,
  TerminalOutput
} from '../../../components/text/terminal'
//import { Code } from '../../../components/text/code'
import { HR } from '../../../components/text/paragraph'
import Image from '../../../components/image'
import Now from '../../../components/now/now'

// prettier-ignore
export default withDoc({
  title: 'Five Minute Guide',
  date: '30 April 2018',
  authors: [shawwn],
  editUrl: 'pages/docs/getting-started/five-minute-guide.js',
})(markdown(components)`

${<Now color="#000"/>} can run any kind of WebGL website, twice as fast as Chrome. You can get this up and running in under five minutes.

This guide will show you how to install ${<Now color="#000"/>} and open a WebGL site.


## Installing ${<Now color="#000"/>}

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

### Step 3: Install ${<Now color="#000"/>}

${<TerminalInput>npm i -g niltree</TerminalInput>}

## Viewing Websites

Let's open a ThreeJS website in ${<Now color="#000"/>}.

Go to the ThreeJS [examples](https://threejs.org/examples/) page using your web browser of choice (Chrome, Firefox, etc):

${<Image caption="[https://threejs.org/examples"
         src="static/book/.gitbook/assets/image%20%281%29.png"
         width={650}
         height={650 * 721 / 896}
         />} 

Most of these ThreeJS examples should run fine in ${<Now color="#000" />}. Let's try the first one, [animation/cloth](https://threejs.org/examples/#webgl_animation_cloth).  Observe that this is a WebGL site, and that it renders fine in Chrome:

${<Image caption="A simple ThreeJS webpage: https://threejs.org/examples/#webgl_animation_cloth"
         src="static/book/.gitbook/assets/image%20%286%29.png"
         width={650}
         height={650 * 721 / 896}
         />}

Now we're going to open this same site using ${<Now color="#000" />}.

* Open your terminal \(we like [hyper](https://hyper.is/)\):

![](static/book/.gitbook/assets/image%20%2812%29.png)

* If you're on Windows, type \`niltree-win\` and press enter.
* Other platforms, type \`niltree\`.

![Niltree&apos;s default prompt](static/book/.gitbook/assets/image%20%289%29.png)

> If you get an error about node module version, ensure \`node --version\` is &gt;= 9.9:
>
> ${<TerminalInput>nvm install 9.9 && nvm use 9.9</TerminalInput>}
>
> and then try again. If you still get an error, re-run this:
>
> ${<TerminalInput>npm i -g niltree</TerminalInput>}

* Paste the ThreeJS URL \([https://threejs.org/examples/\#webgl\_animation\_cloth](https://threejs.org/examples/#webgl_animation_cloth)\) and press enter.

${<Now color="#000" />} will open and run the site:

![](static/book/.gitbook/assets/image%20%282%29.png)

${<Image caption={"ThreeJS cloth simulation: https://threejs.org/examples/#webgl_animation_cloth"}
         src={"static/book/.gitbook/assets/image.png"}
         width={650}
         height={650 * 721 / 896}
         />} 

Let's navigate to a different site.

* Pick out a different ThreeJS [example ](https://threejs.org/examples/)that you like:

${<Image caption="ThreeJS minecraft demo: https://threejs.org/examples/webgl_geometry_minecraft.html"
         src="static/book/.gitbook/assets/image%20%2813%29.png"
         width={650}
         height={650 * 721 / 896}
         />} 

* Switch back to ${<Now color="#000" />}'s command prompt and paste the URL \(e.g. [https://threejs.org/examples/\#webgl\_geometry\_minecraft](https://threejs.org/examples/#webgl_geometry_minecraft)\):

![](static/book/.gitbook/assets/image%20%284%29.png)

${<Image caption="["
         src="static/book/.gitbook/assets/image%20%283%29.png"
         width={650}
         height={650 * 721 / 896}
         />} 
 
### ${<Now color="#000" />}'s command prompt

The ${<Now color="#000" />} command prompt is a NodeJS REPL. If you're a node developer, the interface should be quite familiar. Open ${<Now color="#000" />} and run \`.help\`:

![Niltree&apos;s .help command](static/book/.gitbook/assets/image%20%287%29.png)

> * Pressing up and down will scroll through your REPL history.
> * Pasting a URL into the REPL is shorthand for typing \`.go <url>\` into the REPL.

Similar to Chrome's devtools, you can evaluate any expression you want in the context of the current website. Navigate somewhere and type \`window.location\`:

![window.location](static/book/.gitbook/assets/image%20%2811%29.png)

${<HR />}

These are just a few things you can do with ${<Now color="#000"/>}. To learn more about ${<Now color="#000"/>}, simply follow the rest of the docs.
`)

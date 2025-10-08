import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as I}from"./utils-CBfrqCZ4.js";import{r as h}from"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";const T=h.createContext(null);function B(){const n=h.useContext(T);if(!n)throw new Error("Avatar components must be used within Avatar");return n}function e({className:n,...o}){const[l,s]=h.useState("idle");return a.jsx(T.Provider,{value:{imageLoadingStatus:l,setImageLoadingStatus:s},children:a.jsx("div",{"data-slot":"avatar",className:I("relative flex size-8 shrink-0 overflow-hidden rounded-full",n),...o})})}function r({src:n,alt:o,className:l,...s}){const{imageLoadingStatus:c,setImageLoadingStatus:m}=B();return h.useEffect(()=>{if(!n){m("error");return}m("loading");const p=new Image;return p.onload=()=>m("loaded"),p.onerror=()=>m("error"),p.src=n,()=>{p.onload=null,p.onerror=null}},[n,m]),c!=="loaded"?null:a.jsx("img",{src:n,alt:o,"data-slot":"avatar-image",className:I("aspect-square size-full object-cover",l),...s})}function t({className:n,delayMs:o=0,children:l,...s}){const{imageLoadingStatus:c}=B(),[m,p]=h.useState(o===0);return h.useEffect(()=>{if(o>0){const D=setTimeout(()=>p(!0),o);return()=>clearTimeout(D)}},[o]),c!=="loaded"&&m?a.jsx("div",{"data-slot":"avatar-fallback",className:I("bg-muted flex size-full items-center justify-center rounded-full",n),...s,children:l}):null}e.__docgenInfo={description:"",methods:[],displayName:"Avatar"};t.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback",props:{delayMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"};const{expect:d,waitFor:F,within:i}=__STORYBOOK_MODULE_TEST__,R={title:"ui/Avatar",component:e,tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional CSS classes"}},parameters:{layout:"centered",docs:{description:{component:"An image element with a fallback for representing the user."}}}},v={render:()=>a.jsxs(e,{children:[a.jsx(r,{src:"https://github.com/dealops.png",alt:"@shadcn"}),a.jsx(t,{children:"CN"})]})},g={render:()=>a.jsxs(e,{children:[a.jsx(r,{src:"https://broken-link.png",alt:"Broken"}),a.jsx(t,{children:"BL"})]})},u={render:()=>a.jsxs(e,{children:[a.jsx(r,{src:"https://broken-link.png",alt:"Broken"}),a.jsx(t,{delayMs:600,children:"DL"})]})},x={render:()=>a.jsxs(e,{children:[a.jsx(r,{src:"https://broken-link.png",alt:"Broken"}),a.jsx(t,{className:"bg-gradient-to-br from-blue-400 to-purple-600 text-white",children:a.jsx("svg",{className:"size-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})})]})},b={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(e,{className:"size-6",children:[a.jsx(r,{src:"https://github.com/shadcn.png",alt:"shadcn"}),a.jsx(t,{className:"text-xs",children:"S"})]}),a.jsxs(e,{className:"size-8",children:[a.jsx(r,{src:"https://github.com/shadcn.png",alt:"shadcn"}),a.jsx(t,{className:"text-sm",children:"M"})]}),a.jsxs(e,{className:"size-12",children:[a.jsx(r,{src:"https://github.com/shadcn.png",alt:"shadcn"}),a.jsx(t,{children:"L"})]}),a.jsxs(e,{className:"size-16",children:[a.jsx(r,{src:"https://github.com/shadcn.png",alt:"shadcn"}),a.jsx(t,{className:"text-lg",children:"XL"})]})]})},A={render:()=>a.jsxs("div",{className:"flex -space-x-2",children:[a.jsxs(e,{className:"border-2 border-background",children:[a.jsx(r,{src:"https://github.com/okta.png",alt:"Okta"}),a.jsx(t,{children:"OK"})]}),a.jsxs(e,{className:"border-2 border-background",children:[a.jsx(r,{src:"https://github.com/dapperlabs.png",alt:"Dapper Labs"}),a.jsx(t,{children:"DL"})]}),a.jsxs(e,{className:"border-2 border-background",children:[a.jsx(r,{src:"https://github.com/ottiinc.png",alt:"Otti"}),a.jsx(t,{children:"OT"})]}),a.jsxs(e,{className:"border-2 border-background",children:[a.jsx(r,{src:"https://github.com/stealth--startup.png",alt:"Stealth"}),a.jsx(t,{children:"ST"})]}),a.jsxs(e,{className:"border-2 border-background",children:[a.jsx(r,{src:"https://github.com/dealops.png",alt:"Dealops"}),a.jsx(t,{children:"DO"})]})]})},k={render:()=>a.jsxs("div",{className:"flex items-center gap-8",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsxs(e,{children:[a.jsx(r,{src:"https://slow-loading-image.png",alt:"Slow"}),a.jsx(t,{children:"IM"})]}),a.jsx("span",{className:"text-xs text-muted-foreground",children:"Immediate"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsxs(e,{children:[a.jsx(r,{src:"https://slow-loading-image.png",alt:"Slow"}),a.jsx(t,{delayMs:600,children:"DL"})]}),a.jsx("span",{className:"text-xs text-muted-foreground",children:"600ms delay"})]})]})},f={render:()=>a.jsxs(e,{"data-testid":"no-src-avatar",children:[a.jsx(r,{alt:"No source"}),a.jsx(t,{children:"NS"})]})},y={render:()=>a.jsx(e,{children:a.jsx(t,{children:"JD"})})},w={name:"Image loading should show fallback first, then image when loaded",tags:["!dev","!autodocs"],render:()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsxs(e,{"data-testid":"working-avatar",children:[a.jsx(r,{src:"https://github.com/shadcn.png",alt:"Working"}),a.jsx(t,{children:"WK"})]}),a.jsx("span",{className:"text-xs",children:"Working image"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsxs(e,{"data-testid":"broken-avatar",children:[a.jsx(r,{src:"https://broken-url.png",alt:"Broken"}),a.jsx(t,{children:"BR"})]}),a.jsx("span",{className:"text-xs",children:"Broken image"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(e,{"data-testid":"no-image-avatar",children:a.jsx(t,{children:"NO"})}),a.jsx("span",{className:"text-xs",children:"No image"})]})]}),play:async({canvasElement:n,step:o})=>{const l=i(n);await o("should show fallback for broken image",async()=>{const s=l.getByTestId("broken-avatar"),c=i(s).getByText("BR");d(c).toBeInTheDocument()}),await o("should show fallback for no image",async()=>{const s=l.getByTestId("no-image-avatar"),c=i(s).getByText("NO");d(c).toBeInTheDocument()}),await o("should eventually show image for working URL",async()=>{const s=l.getByTestId("working-avatar");await F(()=>{const c=i(s).queryByRole("img");d(c).toBeInTheDocument(),d(c).toHaveAttribute("src","https://github.com/shadcn.png")},{timeout:3e3})})}},j={name:"Avatar should handle edge cases correctly",tags:["!dev","!autodocs"],render:()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsxs(e,{"data-testid":"no-src-avatar",children:[a.jsx(r,{alt:"No source"}),a.jsx(t,{children:"NS"})]}),a.jsxs(e,{"data-testid":"delay-zero-avatar",children:[a.jsx(r,{src:"https://broken-url.png",alt:"Broken"}),a.jsx(t,{delayMs:0,children:"DZ"})]}),a.jsxs(e,{"data-testid":"delay-short-avatar",children:[a.jsx(r,{src:"https://broken-url.png",alt:"Broken"}),a.jsx(t,{delayMs:100,children:"DS"})]})]}),play:async({canvasElement:n,step:o})=>{const l=i(n);await o("should show fallback immediately when no src provided",async()=>{const s=l.getByTestId("no-src-avatar"),c=i(s).getByText("NS");d(c).toBeInTheDocument()}),await o("should show fallback immediately with delayMs=0",async()=>{const s=l.getByTestId("delay-zero-avatar"),c=i(s).getByText("DZ");d(c).toBeInTheDocument()}),await o("should show fallback after short delay",async()=>{const s=l.getByTestId("delay-short-avatar");await F(()=>{const c=i(s).queryByText("DS");d(c).toBeInTheDocument()},{timeout:200})})}},S=()=>{try{return B(),a.jsx("div",{children:"This should not render"})}catch(n){return a.jsxs("div",{"data-testid":"error-caught",className:"text-red-500 text-sm",children:["Error: ",n.message]})}},N={name:"Avatar components should throw error when used outside context",tags:["!dev","!autodocs"],parameters:{a11y:{disable:!0}},render:()=>a.jsxs("div",{"data-testid":"context-test",className:"p-4 border border-red-200 bg-red-50 rounded",children:[a.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"Context Error Test"}),a.jsx("p",{className:"text-red-700 text-sm mb-2",children:"If AvatarImage or AvatarFallback components are used outside of an Avatar component, they will throw an error. This component demonstrates that behavior:"}),a.jsx(S,{}),a.jsx("p",{className:"text-red-700 text-xs mt-2",children:"The error above validates that useAvatarContext properly throws when context is null."})]}),play:async({canvasElement:n,step:o})=>{const l=i(n);await o("verify context error is thrown and caught",async()=>{const s=l.getByTestId("error-caught");d(s).toBeInTheDocument(),d(s).toHaveTextContent("Avatar components must be used within Avatar")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/dealops.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...v.parameters?.docs?.source},description:{story:"An avatar with a fallback.",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://broken-link.png" alt="Broken" />
      <AvatarFallback>BL</AvatarFallback>
    </Avatar>
}`,...g.parameters?.docs?.source},description:{story:"Avatar that shows fallback when image fails to load.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://broken-link.png" alt="Broken" />
      <AvatarFallback delayMs={600}>DL</AvatarFallback>
    </Avatar>
}`,...u.parameters?.docs?.source},description:{story:"Avatar with fallback delay to prevent flashing.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://broken-link.png" alt="Broken" />
      <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-600 text-white">
        <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </AvatarFallback>
    </Avatar>
}`,...x.parameters?.docs?.source},description:{story:"Avatar with custom fallback content.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar className="size-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback className="text-xs">S</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback className="text-sm">M</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Avatars in different sizes.",...b.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/okta.png" alt="Okta" />
        <AvatarFallback>OK</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/dapperlabs.png" alt="Dapper Labs" />
        <AvatarFallback>DL</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/ottiinc.png" alt="Otti" />
        <AvatarFallback>OT</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/stealth--startup.png" alt="Stealth" />
        <AvatarFallback>ST</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/dealops.png" alt="Dealops" />
        <AvatarFallback>DO</AvatarFallback>
      </Avatar>
    </div>
}`,...A.parameters?.docs?.source},description:{story:"Avatar group showcasing multiple avatars.",...A.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarImage src="https://slow-loading-image.png" alt="Slow" />
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">Immediate</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarImage src="https://slow-loading-image.png" alt="Slow" />
          <AvatarFallback delayMs={600}>DL</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">600ms delay</span>
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Avatar demonstrating the delayMs prop as documented in Radix API.
Shows the difference between immediate and delayed fallback rendering.`,...k.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar data-testid="no-src-avatar">
      <AvatarImage alt="No source" />
      <AvatarFallback>NS</AvatarFallback>
    </Avatar>
}`,...f.parameters?.docs?.source},description:{story:"Avatar with no src to test error path.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...y.parameters?.docs?.source},description:{story:"Avatar without image to show fallback-only usage.",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Image loading should show fallback first, then image when loaded",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="flex gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar data-testid="working-avatar">
          <AvatarImage src="https://github.com/shadcn.png" alt="Working" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <span className="text-xs">Working image</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar data-testid="broken-avatar">
          <AvatarImage src="https://broken-url.png" alt="Broken" />
          <AvatarFallback>BR</AvatarFallback>
        </Avatar>
        <span className="text-xs">Broken image</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar data-testid="no-image-avatar">
          <AvatarFallback>NO</AvatarFallback>
        </Avatar>
        <span className="text-xs">No image</span>
      </div>
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("should show fallback for broken image", async () => {
      const brokenAvatar = canvas.getByTestId("broken-avatar");
      const fallback = within(brokenAvatar).getByText("BR");
      expect(fallback).toBeInTheDocument();
    });
    await step("should show fallback for no image", async () => {
      const noImageAvatar = canvas.getByTestId("no-image-avatar");
      const fallback = within(noImageAvatar).getByText("NO");
      expect(fallback).toBeInTheDocument();
    });
    await step("should eventually show image for working URL", async () => {
      const workingAvatar = canvas.getByTestId("working-avatar");
      // Wait for image to load
      await waitFor(() => {
        const img = within(workingAvatar).queryByRole("img");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "https://github.com/shadcn.png");
      }, {
        timeout: 3000
      });
    });
  }
}`,...w.parameters?.docs?.source},description:{story:"Verify image loading and fallback behavior.",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Avatar should handle edge cases correctly",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="flex gap-4">
      <Avatar data-testid="no-src-avatar">
        <AvatarImage alt="No source" />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <Avatar data-testid="delay-zero-avatar">
        <AvatarImage src="https://broken-url.png" alt="Broken" />
        <AvatarFallback delayMs={0}>DZ</AvatarFallback>
      </Avatar>
      <Avatar data-testid="delay-short-avatar">
        <AvatarImage src="https://broken-url.png" alt="Broken" />
        <AvatarFallback delayMs={100}>DS</AvatarFallback>
      </Avatar>
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("should show fallback immediately when no src provided", async () => {
      const avatar = canvas.getByTestId("no-src-avatar");
      const fallback = within(avatar).getByText("NS");
      expect(fallback).toBeInTheDocument();
    });
    await step("should show fallback immediately with delayMs=0", async () => {
      const avatar = canvas.getByTestId("delay-zero-avatar");
      const fallback = within(avatar).getByText("DZ");
      expect(fallback).toBeInTheDocument();
    });
    await step("should show fallback after short delay", async () => {
      const avatar = canvas.getByTestId("delay-short-avatar");

      // Wait for the delay to pass and fallback to appear
      await waitFor(() => {
        const fallback = within(avatar).queryByText("DS");
        expect(fallback).toBeInTheDocument();
      }, {
        timeout: 200
      });
    });
  }
}`,...j.parameters?.docs?.source},description:{story:"Comprehensive test for edge cases and cleanup behavior.",...j.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Avatar components should throw error when used outside context",
  tags: ["!dev", "!autodocs"],
  parameters: {
    a11y: {
      disable: true
    } // Disable a11y testing for error demonstration
  },
  render: () => <div data-testid="context-test" className="p-4 border border-red-200 bg-red-50 rounded">
      <h3 className="font-semibold text-red-800 mb-2">Context Error Test</h3>
      <p className="text-red-700 text-sm mb-2">
        If AvatarImage or AvatarFallback components are used outside of an Avatar component,
        they will throw an error. This component demonstrates that behavior:
      </p>
      <InvalidAvatarUsage />
      <p className="text-red-700 text-xs mt-2">
        The error above validates that useAvatarContext properly throws when context is null.
      </p>
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("verify context error is thrown and caught", async () => {
      const errorDiv = canvas.getByTestId("error-caught");
      expect(errorDiv).toBeInTheDocument();
      expect(errorDiv).toHaveTextContent("Avatar components must be used within Avatar");
    });
  }
}`,...N.parameters?.docs?.source}}};const M=["Default","Fallback","FallbackWithDelay","CustomFallback","Sizes","Group","DelayComparison","NoSrc","FallbackOnly","LoadingBehaviorTest","EdgeCasesTest","ContextErrorTest"];export{N as ContextErrorTest,x as CustomFallback,v as Default,k as DelayComparison,j as EdgeCasesTest,g as Fallback,y as FallbackOnly,u as FallbackWithDelay,A as Group,w as LoadingBehaviorTest,f as NoSrc,b as Sizes,M as __namedExportsOrder,R as default};

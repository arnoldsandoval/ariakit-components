import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./button-PHayyMCs.js";import{c as S}from"./createLucideIcon-B4t1phfA.js";import"./XCKGTAUF-BVIfH-SL.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";import"./VOQWLFSQ-CfksXDZp.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],k=S("arrow-up-right",w);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],U=S("git-branch",N);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],R=S("loader-circle",L),{fn:t}=__STORYBOOK_MODULE_TEST__,M={title:"ui/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon","icon-sm","icon-lg"],if:{arg:"variant",neq:"link"}},children:{control:"text"},disabled:{control:"boolean"}},parameters:{layout:"centered",docs:{description:{component:"Displays a button or a component that looks like a button."}}},args:{variant:"default",size:"default",children:"Button",disabled:!1,onClick:t()}},s={},a={args:{variant:"outline"}},o={args:{variant:"ghost"}},i={args:{variant:"secondary"}},c={args:{variant:"destructive"}},d={args:{variant:"link"}},l={render:n=>e.jsxs(r,{...n,disabled:!0,children:[e.jsx(R,{className:"animate-spin"}),"Submit"]}),args:{size:"sm",variant:"outline"}},u={render:n=>e.jsxs(r,{...n,children:[e.jsx(U,{})," New Branch"]}),args:{variant:"outline",size:"sm"}},p={args:{size:"sm"}},m={args:{size:"lg"}},g={render:n=>e.jsx(r,{...n,"aria-label":"Submit",children:e.jsx(k,{})}),args:{variant:"outline",size:"icon"}},h={args:{disabled:!0}},v={render:n=>e.jsx(r,{...n,className:"rounded-full","aria-label":"Submit",children:e.jsx(k,{})}),args:{variant:"outline",size:"icon"}},b={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{size:"sm",variant:"outline",onClick:t(),children:"Small"}),e.jsx(r,{size:"icon-sm","aria-label":"Submit",variant:"outline",onClick:t(),children:e.jsx(k,{})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{variant:"outline",onClick:t(),children:"Default"}),e.jsx(r,{size:"icon","aria-label":"Submit",variant:"outline",onClick:t(),children:e.jsx(k,{})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{size:"lg",variant:"outline",onClick:t(),children:"Large"}),e.jsx(r,{size:"icon-lg","aria-label":"Submit",variant:"outline",onClick:t(),children:e.jsx(k,{})})]})]})},f={args:{render:e.jsx("a",{href:"https://www.google.com"}),children:"Visit Google"}},y={render:n=>{const B=({href:j,...z})=>e.jsx("a",{href:j,...z});return e.jsx(r,{...n,render:e.jsx(B,{href:"/dashboard"}),children:"Go to Dashboard"})},args:{variant:"secondary"}},x={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{render:e.jsx("a",{href:"#home"}),variant:"default",children:"Home"}),e.jsx(r,{render:e.jsx("a",{href:"#about"}),variant:"secondary",children:"About"}),e.jsx(r,{render:e.jsx("a",{href:"#contact"}),variant:"ghost",children:"Contact"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"The default form of the button, used for primary actions and commands.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...a.parameters?.docs?.source},description:{story:"Use the `outline` button to reduce emphasis on secondary actions, such as\ncanceling or dismissing a dialog.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...o.parameters?.docs?.source},description:{story:"Use the `ghost` button is minimalistic and subtle, for less intrusive\nactions.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...i.parameters?.docs?.source},description:{story:"Use the `secondary` button to call for less emphasized actions, styled to\ncomplement the primary button while being less conspicuous.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...c.parameters?.docs?.source},description:{story:"Use the `destructive` button to indicate errors, alerts, or the need for\nimmediate attention.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...d.parameters?.docs?.source},description:{story:"Use the `link` button to reduce emphasis on tertiary actions, such as\nhyperlink or navigation, providing a text-only interactive element.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} disabled>
      <Loader2 className="animate-spin" />
      Submit
    </Button>,
  args: {
    size: "sm",
    variant: "outline"
  }
}`,...l.parameters?.docs?.source},description:{story:"A button with a loading spinner.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <GitBranch /> New Branch
    </Button>,
  args: {
    variant: "outline",
    size: "sm"
  }
}`,...u.parameters?.docs?.source},description:{story:"A button with an icon. The spacing between the icon and text is automatically adjusted.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...p.parameters?.docs?.source},description:{story:"Use the `sm` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...m.parameters?.docs?.source},description:{story:"Use the `lg` size for a larger button, offering better visibility and\neasier interaction for users.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} aria-label="Submit">
      <ArrowUpRight />
    </Button>,
  args: {
    variant: "outline",
    size: "icon"
  }
}`,...g.parameters?.docs?.source},description:{story:"An icon button using the icon size.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Add the `disabled` prop to prevent interactions with the button.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} className="rounded-full" aria-label="Submit">
      <ArrowUpRight />
    </Button>,
  args: {
    variant: "outline",
    size: "icon"
  }
}`,...v.parameters?.docs?.source},description:{story:"A rounded button using the rounded-full class.",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={fn()}>
          Small
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline" onClick={fn()}>
          <ArrowUpRight />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={fn()}>
          Default
        </Button>
        <Button size="icon" aria-label="Submit" variant="outline" onClick={fn()}>
          <ArrowUpRight />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="lg" variant="outline" onClick={fn()}>
          Large
        </Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline" onClick={fn()}>
          <ArrowUpRight />
        </Button>
      </div>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Size variations showing small, medium, and large buttons with icons.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    render: <a href="https://www.google.com" />,
    children: "Visit Google"
  }
}`,...f.parameters?.docs?.source},description:{story:"Use the `render` prop to render the button as a link while maintaining\nall button styles and accessibility features.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    // Example router link component (like Next.js Link or React Router Link)
    const RouterLink = ({
      href,
      ...props
    }: any) => <a href={href} {...props} />;
    return <Button {...args} render={<RouterLink href="/dashboard" />}>
        Go to Dashboard
      </Button>;
  },
  args: {
    variant: "secondary"
  }
}`,...y.parameters?.docs?.source},description:{story:"Use the `render` prop with a router link component. This pattern is useful\nfor navigation links that need button styling.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Button render={<a href="#home" />} variant="default">
        Home
      </Button>
      <Button render={<a href="#about" />} variant="secondary">
        About
      </Button>
      <Button render={<a href="#contact" />} variant="ghost">
        Contact
      </Button>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Demonstrates using the `render` prop with different variants to create\nlink-styled buttons that navigate.",...x.parameters?.docs?.description}}};const q=["Default","Outline","Ghost","Secondary","Destructive","Link","Spinner","WithIcon","Small","Large","Icon","Disabled","Rounded","SizeVariations","AsLink","UsingRenderProp","NavigationButtons"];export{f as AsLink,s as Default,c as Destructive,h as Disabled,o as Ghost,g as Icon,m as Large,d as Link,x as NavigationButtons,a as Outline,v as Rounded,i as Secondary,b as SizeVariations,p as Small,l as Spinner,y as UsingRenderProp,u as WithIcon,q as __namedExportsOrder,M as default};

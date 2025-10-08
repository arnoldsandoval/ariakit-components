import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as f}from"./QJ4LGO2N-ChJddnCk.js";import{c as y}from"./index-CdJFUDDL.js";import{c as h}from"./utils-CBfrqCZ4.js";import"./VOQWLFSQ-CfksXDZp.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";const B=y("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function o({className:r,variant:n,render:s,children:e,...b}){return a.jsx(f,{"data-slot":"badge",className:h(B({variant:n}),r),render:s||(m=>a.jsx("span",{...m})),...b,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"Badge"};const{expect:t,within:x}=__STORYBOOK_MODULE_TEST__,I={title:"ui/Badge",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]},render:{control:!1,description:"Custom render function for polymorphic component behavior"},children:{control:"text",description:"Badge content"}},args:{variant:"default",children:"Badge"},parameters:{layout:"centered",docs:{description:{component:"Displays a badge or a component that looks like a badge."}}}},d={},i={args:{variant:"secondary"}},c={args:{variant:"destructive"}},g={args:{variant:"outline"}},l={render:r=>a.jsx(o,{render:n=>a.jsx("a",{href:"#",...n}),...r}),args:{children:"Link Badge",variant:"outline"}},u={render:r=>a.jsx(o,{render:n=>a.jsx("button",{type:"button",...n}),...r}),args:{children:"Button Badge",variant:"secondary"}},p={name:"Render prop should create correct elements",tags:["!dev","!autodocs"],render:()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsx(o,{"data-testid":"default-badge",children:"Default"}),a.jsx(o,{"data-testid":"link-badge",render:r=>a.jsx("a",{href:"#",...r}),children:"Link"}),a.jsx(o,{"data-testid":"button-badge",render:r=>a.jsx("button",{type:"button",...r}),children:"Button"})]}),play:async({canvasElement:r,step:n})=>{const s=x(r);await n("should render default badge as span",async()=>{const e=s.getByTestId("default-badge");t(e.tagName.toLowerCase()).toBe("span"),t(e).toHaveTextContent("Default")}),await n("should render link badge as anchor",async()=>{const e=s.getByTestId("link-badge");t(e.tagName.toLowerCase()).toBe("a"),t(e).toHaveTextContent("Link"),t(e).toHaveAttribute("href","#")}),await n("should render button badge as button",async()=>{const e=s.getByTestId("button-badge");t(e.tagName.toLowerCase()).toBe("button"),t(e).toHaveTextContent("Button"),t(e).toHaveAttribute("type","button")}),await n("should apply badge styles to all variants",async()=>{const e=s.getByTestId("default-badge"),b=s.getByTestId("link-badge"),m=s.getByTestId("button-badge");t(e).toHaveAttribute("data-slot","badge"),t(b).toHaveAttribute("data-slot","badge"),t(m).toHaveAttribute("data-slot","badge"),["inline-flex","items-center","justify-center","rounded-md"].forEach(v=>{t(e).toHaveClass(v),t(b).toHaveClass(v),t(m).toHaveClass(v)})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source},description:{story:"The default form of the badge.",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...i.parameters?.docs?.source},description:{story:"Use the `secondary` badge to call for less urgent information, blending\ninto the interface while still signaling minor updates or statuses.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...c.parameters?.docs?.source},description:{story:"Use the `destructive` badge to indicate errors, alerts, or the need for\nimmediate attention.",...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...g.parameters?.docs?.source},description:{story:"Use the `outline` badge for overlaying without obscuring interface details,\nemphasizing clarity and subtlety.",...g.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Badge render={props => <a href="#" {...props} />} {...args} />,
  args: {
    children: "Link Badge",
    variant: "outline"
  }
}`,...l.parameters?.docs?.source},description:{story:"Badge rendered as a link using the render prop pattern.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Badge render={props => <button type="button" {...props} />} {...args} />,
  args: {
    children: "Button Badge",
    variant: "secondary"
  }
}`,...u.parameters?.docs?.source},description:{story:"Badge rendered as a button using the render prop pattern.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Render prop should create correct elements",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="flex gap-4">
      <Badge data-testid="default-badge">Default</Badge>
      <Badge data-testid="link-badge" render={props => <a href="#" {...props} />}>
        Link
      </Badge>
      <Badge data-testid="button-badge" render={props => <button type="button" {...props} />}>
        Button
      </Badge>
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("should render default badge as span", async () => {
      const badge = canvas.getByTestId("default-badge");
      expect(badge.tagName.toLowerCase()).toBe("span");
      expect(badge).toHaveTextContent("Default");
    });
    await step("should render link badge as anchor", async () => {
      const badge = canvas.getByTestId("link-badge");
      expect(badge.tagName.toLowerCase()).toBe("a");
      expect(badge).toHaveTextContent("Link");
      expect(badge).toHaveAttribute("href", "#");
    });
    await step("should render button badge as button", async () => {
      const badge = canvas.getByTestId("button-badge");
      expect(badge.tagName.toLowerCase()).toBe("button");
      expect(badge).toHaveTextContent("Button");
      expect(badge).toHaveAttribute("type", "button");
    });
    await step("should apply badge styles to all variants", async () => {
      const defaultBadge = canvas.getByTestId("default-badge");
      const linkBadge = canvas.getByTestId("link-badge");
      const buttonBadge = canvas.getByTestId("button-badge");

      // All should have the data-slot attribute
      expect(defaultBadge).toHaveAttribute("data-slot", "badge");
      expect(linkBadge).toHaveAttribute("data-slot", "badge");
      expect(buttonBadge).toHaveAttribute("data-slot", "badge");

      // All should have badge styling classes
      const badgeClasses = ["inline-flex", "items-center", "justify-center", "rounded-md"];
      badgeClasses.forEach(className => {
        expect(defaultBadge).toHaveClass(className);
        expect(linkBadge).toHaveClass(className);
        expect(buttonBadge).toHaveClass(className);
      });
    });
  }
}`,...p.parameters?.docs?.source},description:{story:"Test to verify render prop functionality works correctly.",...p.parameters?.docs?.description}}};const N=["Default","Secondary","Destructive","Outline","AsLink","AsButton","RenderPropTest"];export{u as AsButton,l as AsLink,d as Default,c as Destructive,g as Outline,p as RenderPropTest,i as Secondary,N as __namedExportsOrder,I as default};

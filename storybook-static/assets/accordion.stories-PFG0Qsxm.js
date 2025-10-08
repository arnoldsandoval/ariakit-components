import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as W,a as V}from"./NMGNQVTG-CZ8g0E-x.js";import{D as q}from"./disclosure-provider-DAKuIDqy.js";import{r as w}from"./iframe-CYLbOkOm.js";import{c as u}from"./utils-CBfrqCZ4.js";import{C as _}from"./chevron-down-C7EKFzSm.js";import"./VOQWLFSQ-CfksXDZp.js";import"./RTNCFSKZ-CUR9m4Ci.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";import"./XCKGTAUF-BVIfH-SL.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B4t1phfA.js";const O=w.createContext(null);function B(){const n=w.useContext(O);if(!n)throw new Error("Accordion components must be used within an Accordion");return n}function l({type:n="single",collapsible:r=!1,disabled:o=!1,value:t,onValueChange:c,defaultValue:m,className:C,...k}){const[E,R]=w.useState(()=>n==="single"&&typeof m=="string"?m:null),S=w.useMemo(()=>({type:n,collapsible:r,disabled:o,value:t,onValueChange:c,defaultValue:m,openItem:E||void 0,setOpenItem:D=>R(D)}),[n,r,o,t,c,m,E]);return e.jsx(O.Provider,{value:S,children:e.jsx("div",{"data-slot":"accordion",className:C,...k})})}function s({value:n,className:r,...o}){const t=B(),c=w.useMemo(()=>t.defaultValue!==void 0?Array.isArray(t.defaultValue)&&t.defaultValue.includes(n):!1,[t.defaultValue,n]);if(t.type==="single"){const m=t.openItem===n,C=k=>{k?t.setOpenItem?.(n):t.collapsible&&t.setOpenItem?.(null)};return e.jsx(q,{open:m,setOpen:C,children:e.jsx("div",{"data-slot":"accordion-item",className:u("border-b last:border-b-0",r),...o})})}else return e.jsx(q,{defaultOpen:c,children:e.jsx("div",{"data-slot":"accordion-item",className:u("border-b last:border-b-0",r),...o})})}function i({className:n,children:r,...o}){const t=B();return e.jsx("div",{className:"flex",children:e.jsxs(W,{"data-slot":"accordion-trigger",disabled:t.disabled||o.disabled,className:u("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[aria-expanded=true]>svg]:rotate-180",n),...o,children:[r,e.jsx(_,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function a({className:n,children:r,...o}){return e.jsx(V,{"data-slot":"accordion-content",className:u("grid overflow-hidden text-sm transition-all duration-200 ease-out","grid-rows-[0fr] data-[enter]:grid-rows-[1fr]"),...o,children:e.jsx("div",{className:u("overflow-hidden"),children:e.jsx("div",{className:u("pt-0 pb-4",n),children:r})})})}l.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};s.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};const{expect:d,fn:L,userEvent:f,waitFor:v,within:N}=__STORYBOOK_MODULE_TEST__,ee={title:"ui/Accordion",component:l,tags:["autodocs"],argTypes:{type:{control:"radio",description:"Type of accordion behavior",options:["single","multiple"]},collapsible:{control:"boolean",description:"Can an open accordion be collapsed using the trigger",if:{arg:"type",eq:"single"}},defaultValue:{control:"text",description:"Default open item(s)"},disabled:{control:"boolean"}},args:{type:"single",collapsible:!0,disabled:!1,onValueChange:L()},parameters:{layout:"padded",docs:{description:{component:`A vertically stacked set of interactive headings that each reveal a section
of content.`}}},render:n=>e.jsxs(l,{...n,className:"w-full",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{children:"Is it accessible?"}),e.jsx(a,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{children:"Is it styled?"}),e.jsx(a,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(i,{children:"Is it animated?"}),e.jsx(a,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},p={},h={args:{type:"single",collapsible:!0},render:n=>e.jsxs(l,{...n,className:"w-full",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{children:"Can I have multiple items open?"}),e.jsx(a,{children:"No, in single mode only one item can be open at a time. Try opening another item and this one will automatically close."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{children:"This item is open by default"}),e.jsx(a,{children:"This item starts open because of the defaultValue prop. When you click another item, this will close automatically."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(i,{children:"Try opening this one"}),e.jsx(a,{children:"When you open this item, the previous one will close automatically. That's how single mode works!"})]})]})},g={args:{type:"multiple",defaultValue:["item-1","item-3"]},render:n=>e.jsxs(l,{...n,className:"w-full",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{children:"I can stay open!"}),e.jsx(a,{children:"In multiple mode, I can stay open while you open other items. Try it!"})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{children:"Open me too"}),e.jsx(a,{children:"Go ahead and open me - the other items will stay open. Multiple mode allows all items to be open at once."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(i,{children:"We can all be open together"}),e.jsx(a,{children:"This demonstrates how multiple mode works - each accordion item operates independently."})]})]})},y={args:{type:"single",collapsible:!1,defaultValue:"item-1"},render:n=>e.jsxs(l,{...n,className:"w-full",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{children:"I can't be collapsed"}),e.jsx(a,{children:"With collapsible=false, clicking me won't close me. There must always be one item open."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{children:"Click me to open"}),e.jsx(a,{children:"When you open me, the previous item will close, but I can't be collapsed by clicking me again."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(i,{children:"Always one open"}),e.jsx(a,{children:"This ensures there's always content visible to the user."})]})]})},x={args:{type:"single",disabled:!0,defaultValue:"item-2"},render:n=>e.jsxs(l,{...n,className:"w-full",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{children:"This trigger is disabled"}),e.jsx(a,{children:"This content won't be accessible because the trigger is disabled."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{children:"This one is also disabled"}),e.jsx(a,{children:"Even though this item is open by default, you can't close it when disabled."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(i,{children:"All triggers are disabled"}),e.jsx(a,{children:"When the accordion is disabled, all interactions are prevented."})]})]})},T={name:"when accordions are clicked, should open only one item at a time",args:{type:"single"},tags:["!dev","!autodocs"],play:async({canvasElement:n})=>{const r=N(n),o=await r.getAllByRole("button");for(const t of o)await f.click(t),await v(async()=>{const c=r.getAllByRole("button",{expanded:!0});return d(c.length).toBe(1)});await f.click(o[o.length-1]),await v(async()=>{const t=r.queryAllByRole("button",{expanded:!0});return d(t.length).toBe(0)})}},j={name:"when accordions are clicked, should open all items one at a time",args:{type:"multiple"},tags:["!dev","!autodocs"],play:async({canvasElement:n})=>{const r=N(n),o=await r.getAllByRole("button");for(let t=0;t<o.length;t++)await f.click(o[t]),await v(async()=>{const c=r.getAllByRole("button",{expanded:!0});return d(c.length).toBe(t+1)});for(let t=o.length-1;t>0;t--)await f.click(o[t]),await v(async()=>{const c=r.getAllByRole("button",{expanded:!0});return d(c.length).toBe(t)});await f.click(o[0]),await v(async()=>{const t=r.queryAllByRole("button",{expanded:!0});return d(t.length).toBe(0)})}},A={render:()=>e.jsxs(l,{children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{render:e.jsx("a",{href:"#faq1"}),children:"Frequently Asked Question 1"}),e.jsx(a,{children:"This is the answer to the first frequently asked question."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{render:e.jsx("a",{href:"#faq2"}),children:"Frequently Asked Question 2"}),e.jsx(a,{children:"This is the answer to the second frequently asked question."})]})]})},b={render:()=>{const n=({href:r,...o})=>e.jsx("a",{href:r,...o});return e.jsxs(l,{children:[e.jsxs(s,{value:"item-1",children:[e.jsx(i,{render:e.jsx(n,{href:"/docs/getting-started"}),children:"Getting Started"}),e.jsx(a,{children:"Learn how to get started with our component library."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(i,{render:e.jsx(n,{href:"/docs/components"}),children:"Components"}),e.jsx(a,{children:"Explore all available components and their usage."})]})]})}},F=()=>{try{return B(),e.jsx("div",{children:"This should not render"})}catch(n){return e.jsxs("div",{"data-testid":"error-caught",className:"text-red-500 text-sm",children:["Error: ",n.message]})}},I={name:"Accordion components should throw error when used outside context",tags:["!dev","!autodocs"],parameters:{a11y:{disable:!0}},render:()=>e.jsxs("div",{"data-testid":"context-test",className:"p-4 border border-red-200 bg-red-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"Context Error Test"}),e.jsx("p",{className:"text-red-700 text-sm mb-2",children:"If AccordionItem or AccordionTrigger components are used outside of an Accordion component, they will throw an error. This component demonstrates that behavior:"}),e.jsx(F,{}),e.jsx("p",{className:"text-red-700 text-xs mt-2",children:"The error above validates that useAccordionContext properly throws when context is null."})]}),play:async({canvasElement:n,step:r})=>{const o=N(n);await r("verify context error is thrown and caught",async()=>{const t=o.getByTestId("error-caught");d(t).toBeInTheDocument(),d(t).toHaveTextContent("Accordion components must be used within an Accordion")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source},description:{story:"The default behavior of the accordion allows only one item to be open.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    collapsible: true
  },
  render: args => <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I have multiple items open?</AccordionTrigger>
        <AccordionContent>
          No, in single mode only one item can be open at a time. Try opening
          another item and this one will automatically close.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>This item is open by default</AccordionTrigger>
        <AccordionContent>
          This item starts open because of the defaultValue prop. When you click
          another item, this will close automatically.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Try opening this one</AccordionTrigger>
        <AccordionContent>
          When you open this item, the previous one will close automatically.
          That's how single mode works!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...h.parameters?.docs?.source},description:{story:`In single mode, only one accordion item can be open at a time.
Opening a new item automatically closes the previously opened one.`,...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    defaultValue: ["item-1", "item-3"]
  },
  render: args => <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>I can stay open!</AccordionTrigger>
        <AccordionContent>
          In multiple mode, I can stay open while you open other items. Try it!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Open me too</AccordionTrigger>
        <AccordionContent>
          Go ahead and open me - the other items will stay open. Multiple mode
          allows all items to be open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>We can all be open together</AccordionTrigger>
        <AccordionContent>
          This demonstrates how multiple mode works - each accordion item
          operates independently.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...g.parameters?.docs?.source},description:{story:`In multiple mode, you can have several accordion items open simultaneously.
Each item can be toggled independently.`,...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    collapsible: false,
    defaultValue: "item-1"
  },
  render: args => <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>I can't be collapsed</AccordionTrigger>
        <AccordionContent>
          With collapsible=false, clicking me won't close me. There must always
          be one item open.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Click me to open</AccordionTrigger>
        <AccordionContent>
          When you open me, the previous item will close, but I can't be
          collapsed by clicking me again.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Always one open</AccordionTrigger>
        <AccordionContent>
          This ensures there's always content visible to the user.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...y.parameters?.docs?.source},description:{story:`When collapsible is false in single mode, there must always be one item open.
Clicking the open item won't close it.`,...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    disabled: true,
    defaultValue: "item-2"
  },
  render: args => <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>This trigger is disabled</AccordionTrigger>
        <AccordionContent>
          This content won't be accessible because the trigger is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>This one is also disabled</AccordionTrigger>
        <AccordionContent>
          Even though this item is open by default, you can't close it when
          disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>All triggers are disabled</AccordionTrigger>
        <AccordionContent>
          When the accordion is disabled, all interactions are prevented.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...x.parameters?.docs?.source},description:{story:`When disabled is true, all accordion triggers become non-interactive.
They show reduced opacity and cannot be clicked.`,...x.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "when accordions are clicked, should open only one item at a time",
  args: {
    type: "single" as const
  },
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const accordions = await canvas.getAllByRole("button");

    // Open the tabs one at a time
    for (const trigger of accordions) {
      await userEvent.click(trigger);
      await waitFor(async () => {
        const expandedButtons = canvas.getAllByRole("button", {
          expanded: true
        });
        return expect(expandedButtons.length).toBe(1);
      });
    }

    // Close the last opened tab
    await userEvent.click(accordions[accordions.length - 1]);
    await waitFor(async () => {
      const expandedButtons = canvas.queryAllByRole("button", {
        expanded: true
      });
      return expect(expandedButtons.length).toBe(0);
    });
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "when accordions are clicked, should open all items one at a time",
  args: {
    type: "multiple"
  },
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const accordions = await canvas.getAllByRole("button");

    // Open all tabs one at a time
    for (let i = 0; i < accordions.length; i++) {
      await userEvent.click(accordions[i]);
      await waitFor(async () => {
        const expandedButtons = canvas.getAllByRole("button", {
          expanded: true
        });
        return expect(expandedButtons.length).toBe(i + 1);
      });
    }

    // Close all tabs one at a time
    for (let i = accordions.length - 1; i > 0; i--) {
      await userEvent.click(accordions[i]);
      await waitFor(async () => {
        const expandedButtons = canvas.getAllByRole("button", {
          expanded: true
        });
        return expect(expandedButtons.length).toBe(i);
      });
    }

    // Close the last opened tab
    await userEvent.click(accordions[0]);
    await waitFor(async () => {
      const expandedButtons = canvas.queryAllByRole("button", {
        expanded: true
      });
      return expect(expandedButtons.length).toBe(0);
    });
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger render={<a href="#faq1" />}>
          Frequently Asked Question 1
        </AccordionTrigger>
        <AccordionContent>
          This is the answer to the first frequently asked question.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger render={<a href="#faq2" />}>
          Frequently Asked Question 2
        </AccordionTrigger>
        <AccordionContent>
          This is the answer to the second frequently asked question.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...A.parameters?.docs?.source},description:{story:"Use the `render` prop to render accordion triggers as links while maintaining\nall accordion styles and accessibility features.",...A.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Example router link component (like Next.js Link or React Router Link)
    const RouterLink = ({
      href,
      ...props
    }: any) => <a href={href} {...props} />;
    return <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger render={<RouterLink href="/docs/getting-started" />}>
            Getting Started
          </AccordionTrigger>
          <AccordionContent>
            Learn how to get started with our component library.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger render={<RouterLink href="/docs/components" />}>
            Components
          </AccordionTrigger>
          <AccordionContent>
            Explore all available components and their usage.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Use the `render` prop with a router link component for navigation.",...b.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Accordion components should throw error when used outside context",
  tags: ["!dev", "!autodocs"],
  parameters: {
    a11y: {
      disable: true
    } // Disable a11y testing for error demonstration
  },
  render: () => <div data-testid="context-test" className="p-4 border border-red-200 bg-red-50 rounded">
      <h3 className="font-semibold text-red-800 mb-2">Context Error Test</h3>
      <p className="text-red-700 text-sm mb-2">
        If AccordionItem or AccordionTrigger components are used outside of an Accordion component,
        they will throw an error. This component demonstrates that behavior:
      </p>
      <InvalidAccordionUsage />
      <p className="text-red-700 text-xs mt-2">
        The error above validates that useAccordionContext properly throws when context is null.
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
      expect(errorDiv).toHaveTextContent("Accordion components must be used within an Accordion");
    });
  }
}`,...I.parameters?.docs?.source}}};const ne=["Default","Single","Multiple","NonCollapsible","Disabled","ShouldOnlyOpenOneWhenSingleType","ShouldOpenAllWhenMultipleType","AsLinks","UsingRenderProp","ContextErrorTest"];export{A as AsLinks,I as ContextErrorTest,p as Default,x as Disabled,g as Multiple,y as NonCollapsible,T as ShouldOnlyOpenOneWhenSingleType,j as ShouldOpenAllWhenMultipleType,h as Single,b as UsingRenderProp,ne as __namedExportsOrder,ee as default};

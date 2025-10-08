import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as u}from"./button-PHayyMCs.js";import{D as x,a as h}from"./NMGNQVTG-CZ8g0E-x.js";import{D as f}from"./disclosure-provider-DAKuIDqy.js";import{c as g}from"./createLucideIcon-B4t1phfA.js";import"./XCKGTAUF-BVIfH-SL.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";import"./VOQWLFSQ-CfksXDZp.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./RTNCFSKZ-CUR9m4Ci.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],b=g("chevrons-up-down",y);function l({className:s,children:t,...o}){return e.jsx(f,{...o,children:e.jsx("div",{"data-slot":"collapsible",className:s,children:t})})}function c({...s}){return e.jsx(x,{"data-slot":"collapsible-trigger",...s})}function d({...s}){return e.jsx(h,{"data-slot":"collapsible-content",...s})}l.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};d.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const{expect:p,fn:v,userEvent:m}=__STORYBOOK_MODULE_TEST__,R={title:"ui/Collapsible",component:l,tags:["autodocs"],argTypes:{},args:{defaultOpen:!1},render:s=>e.jsxs(l,{...s,children:[e.jsx(c,{children:"Can I use this in my project?"}),e.jsx(d,{children:"Yes. Free to use for personal and commercial projects. No attribution required."})]}),parameters:{layout:"centered",docs:{description:{component:"An interactive component which expands/collapses a panel."}}}},a={},n={args:{defaultOpen:!0}},r={render:()=>e.jsxs(l,{className:"flex w-[350px] flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsxs(c,{render:s=>e.jsx(u,{...s,variant:"ghost",size:"icon",className:"size-8",onClick:t=>{v()(t),s.onClick?.(t)}}),children:[e.jsx(b,{}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(d,{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@stitches/react"})]})]})},i={name:"when collapsable trigger is clicked, should show content",tags:["!dev","!autodocs"],play:async({canvas:s,step:t})=>{const o=await s.findByRole("button");await t("Open the collapsible",async()=>{await m.click(o,{delay:100}),p(s.queryByText(/yes/i,{exact:!0})).toBeVisible()}),await t("Close the collapsible",async()=>{await m.click(o,{delay:100}),p(o).toHaveAttribute("aria-expanded","false")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"The default form of the collapsible.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Use the `defaultOpen` prop to start expanded.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger render={(props: React.ComponentProps<typeof Button>) => <Button {...props} variant="ghost" size="icon" className="size-8" onClick={e => {
        fn()(e);
        props.onClick?.(e);
      }} />}>
          <ChevronsUpDown />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...r.parameters?.docs?.source},description:{story:`A collapsible component exactly as shown in shadcn documentation.
This demonstrates the styled demo with Button integration.`,...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "when collapsable trigger is clicked, should show content",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvas,
    step
  }) => {
    const trigger = await canvas.findByRole("button");
    await step("Open the collapsible", async () => {
      await userEvent.click(trigger, {
        delay: 100
      });
      expect(canvas.queryByText(/yes/i, {
        exact: true
      })).toBeVisible();
    });
    await step("Close the collapsible", async () => {
      await userEvent.click(trigger, {
        delay: 100
      });
      // With Ariakit, content is hidden but still in DOM, check aria-expanded instead
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  }
}`,...i.parameters?.docs?.source}}};const q=["Default","DefaultOpen","Demo","ShouldOpenClose"];export{a as Default,n as DefaultOpen,r as Demo,i as ShouldOpenClose,q as __namedExportsOrder,R as default};

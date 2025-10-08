import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as s,t as n}from"./sonner-B493d5IB.js";import{B as o}from"./button-PHayyMCs.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";import"./XCKGTAUF-BVIfH-SL.js";import"./VOQWLFSQ-CfksXDZp.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const{expect:T,fn:C,userEvent:y,waitFor:S,within:k}=__STORYBOOK_MODULE_TEST__,O={title:"ui/Sonner",component:s,tags:["autodocs"],argTypes:{},args:{position:"bottom-right"},parameters:{layout:"fullscreen",docs:{description:{component:"An opinionated toast component for React."}}},render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n("Event has been created",{description:new Date().toLocaleString(),action:{label:"Undo",onClick:C()}}),children:"Show Toast"}),e.jsx(s,{...t})]})},c={},d={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n("Event has been created."),children:"Show Toast"}),e.jsx(s,{...t})]})},l={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n("Event has been created",{description:"Sunday, December 03, 2023 at 9:00 AM"}),children:"Show Toast"}),e.jsx(s,{...t})]})},m={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n("Event has been created",{description:"Sunday, December 03, 2023 at 9:00 AM",action:{label:"Undo",onClick:C()}}),children:"Show Toast"}),e.jsx(s,{...t})]})},u={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n.success("Event has been created"),children:"Show Success Toast"}),e.jsx(s,{...t})]})},p={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n.error("Event has not been created"),variant:"destructive",children:"Show Error Toast"}),e.jsx(s,{...t})]})},h={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n.warning("Event has a warning"),variant:"outline",children:"Show Warning Toast"}),e.jsx(s,{...t})]})},v={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n.info("Be at the area 10 minutes before the event time"),variant:"secondary",children:"Show Info Toast"}),e.jsx(s,{...t})]})},g={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>{const a=()=>new Promise(r=>setTimeout(r,2e3));n.promise(a,{loading:"Loading...",success:()=>"Event has been created",error:"Error"})},children:"Show Loading Toast"}),e.jsx(s,{...t})]})},f={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center space-x-2",children:[e.jsx(o,{onClick:()=>n(e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-2 w-2 rounded-full bg-green-500"}),e.jsx("span",{children:"Event has been created"})]})),children:"Show Custom Toast"}),e.jsx(s,{...t})]})},x={args:{richColors:!0},render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center flex-wrap gap-2",children:[e.jsx(o,{onClick:()=>n.success("Success with rich colors"),variant:"default",children:"Success"}),e.jsx(o,{onClick:()=>n.error("Error with rich colors"),variant:"destructive",children:"Error"}),e.jsx(o,{onClick:()=>n.warning("Warning with rich colors"),variant:"outline",children:"Warning"}),e.jsx(o,{onClick:()=>n.info("Info with rich colors"),variant:"secondary",children:"Info"}),e.jsx(s,{...t})]})},w={render:t=>e.jsxs("div",{className:"flex min-h-96 items-center justify-center flex-wrap gap-2",children:[e.jsx(o,{onClick:()=>{n("Top Left",{position:"top-left"})},variant:"outline",children:"Top Left"}),e.jsx(o,{onClick:()=>{n("Top Center",{position:"top-center"})},variant:"outline",children:"Top Center"}),e.jsx(o,{onClick:()=>{n("Top Right",{position:"top-right"})},variant:"outline",children:"Top Right"}),e.jsx(o,{onClick:()=>{n("Bottom Left",{position:"bottom-left"})},variant:"outline",children:"Bottom Left"}),e.jsx(o,{onClick:()=>{n("Bottom Center",{position:"bottom-center"})},variant:"outline",children:"Bottom Center"}),e.jsx(o,{onClick:()=>{n("Bottom Right",{position:"bottom-right"})},variant:"outline",children:"Bottom Right"}),e.jsx(s,{...t})]})},B={name:"when clicking Show Toast button, should show a toast",tags:["!dev","!autodocs"],play:async({canvasElement:t,step:a})=>{const r=k(t.ownerDocument.body),i=await r.findByRole("button",{name:/show/i});await a("create a toast",async()=>{await y.click(i),await S(()=>T(r.queryByRole("listitem")).toBeInTheDocument())}),await a("create more toasts",async()=>{await y.click(i),await y.click(i),await S(()=>T(r.getAllByRole("listitem")).toHaveLength(3))})}},j={name:"when clicking the action button, should close the toast",tags:["!dev","!autodocs"],play:async({canvasElement:t,step:a})=>{const r=k(t.ownerDocument.body),i=await r.findByRole("button",{name:/show toast/i});await a("create a toast",async()=>{await y.click(i)}),await a("close the toast via action button",async()=>{await y.click(await r.findByRole("button",{name:/undo/i})),await S(()=>T(r.queryByRole("listitem")).not.toBeInTheDocument())})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source},description:{story:"The default sonner toast.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast("Event has been created.")}>
        Show Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...d.parameters?.docs?.source},description:{story:"Simple toast notification.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM"
    })}>
        Show Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Toast with description.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: fn()
      }
    })}>
        Show Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Toast with action button.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast.success("Event has been created")}>
        Show Success Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Success toast variant.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast.error("Event has not been created")} variant="destructive">
        Show Error Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Error toast variant.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast.warning("Event has a warning")} variant="outline">
        Show Warning Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...h.parameters?.docs?.source},description:{story:"Warning toast variant.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast.info("Be at the area 10 minutes before the event time")} variant="secondary">
        Show Info Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Info toast variant.",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => {
      const promise = () => new Promise(resolve => setTimeout(resolve, 2000));
      toast.promise(promise, {
        loading: 'Loading...',
        success: () => {
          return \`Event has been created\`;
        },
        error: 'Error'
      });
    }}>
        Show Loading Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Loading toast with promise handling.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button onClick={() => toast(<div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Event has been created</span>
            </div>)}>
        Show Custom Toast
      </Button>
      <Toaster {...args} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Custom JSX content in toast.",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    richColors: true
  },
  render: args => <div className="flex min-h-96 items-center justify-center flex-wrap gap-2">
      <Button onClick={() => toast.success("Success with rich colors")} variant="default">
        Success
      </Button>
      <Button onClick={() => toast.error("Error with rich colors")} variant="destructive">
        Error
      </Button>
      <Button onClick={() => toast.warning("Warning with rich colors")} variant="outline">
        Warning
      </Button>
      <Button onClick={() => toast.info("Info with rich colors")} variant="secondary">
        Info
      </Button>
      <Toaster {...args} />
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Rich colors theme variant.",...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex min-h-96 items-center justify-center flex-wrap gap-2">
      <Button onClick={() => {
      toast("Top Left", {
        position: "top-left"
      });
    }} variant="outline">
        Top Left
      </Button>
      <Button onClick={() => {
      toast("Top Center", {
        position: "top-center"
      });
    }} variant="outline">
        Top Center
      </Button>
      <Button onClick={() => {
      toast("Top Right", {
        position: "top-right"
      });
    }} variant="outline">
        Top Right
      </Button>
      <Button onClick={() => {
      toast("Bottom Left", {
        position: "bottom-left"
      });
    }} variant="outline">
        Bottom Left
      </Button>
      <Button onClick={() => {
      toast("Bottom Center", {
        position: "bottom-center"
      });
    }} variant="outline">
        Bottom Center
      </Button>
      <Button onClick={() => {
      toast("Bottom Right", {
        position: "bottom-right"
      });
    }} variant="outline">
        Bottom Right
      </Button>
      <Toaster {...args} />
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Different toast positions.",...w.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "when clicking Show Toast button, should show a toast",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole("button", {
      name: /show/i
    });
    await step("create a toast", async () => {
      await userEvent.click(triggerBtn);
      await waitFor(() => expect(canvasBody.queryByRole("listitem")).toBeInTheDocument());
    });
    await step("create more toasts", async () => {
      await userEvent.click(triggerBtn);
      await userEvent.click(triggerBtn);
      await waitFor(() => expect(canvasBody.getAllByRole("listitem")).toHaveLength(3));
    });
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "when clicking the action button, should close the toast",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole("button", {
      name: /show toast/i
    });
    await step("create a toast", async () => {
      await userEvent.click(triggerBtn);
    });
    await step("close the toast via action button", async () => {
      await userEvent.click(await canvasBody.findByRole("button", {
        name: /undo/i
      }));
      await waitFor(() => expect(canvasBody.queryByRole("listitem")).not.toBeInTheDocument());
    });
  }
}`,...j.parameters?.docs?.source}}};const q=["Default","Simple","WithDescription","WithAction","Success","Error","Warning","Info","Loading","Custom","RichColors","Positions","ShouldShowToast","ShouldCloseToast"];export{f as Custom,c as Default,p as Error,v as Info,g as Loading,w as Positions,x as RichColors,j as ShouldCloseToast,B as ShouldShowToast,d as Simple,u as Success,h as Warning,m as WithAction,l as WithDescription,q as __namedExportsOrder,O as default};

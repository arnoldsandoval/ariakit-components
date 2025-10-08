import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as h}from"./button-PHayyMCs.js";import{F as l,u as p,a as x,o as y,b as w,c as b,d as f,f as g,e as v,g as F,i as T,s as B}from"./schemas-IV0wEr4g.js";import{I as j}from"./input-CZ_nX7BA.js";import{T as S,t as I}from"./sonner-B493d5IB.js";import"./XCKGTAUF-BVIfH-SL.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";import"./VOQWLFSQ-CfksXDZp.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./QJ4LGO2N-ChJddnCk.js";import"./label-CFb4bvFV.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";const{expect:o,fn:E,userEvent:d,within:N}=__STORYBOOK_MODULE_TEST__,C=y({username:B().min(6,{message:"Username must be at least 6 characters."})}),z={title:"ui/Form",component:l,tags:["autodocs"],argTypes:{},parameters:{layout:"centered",docs:{description:{component:"Building forms with React Hook Form and Zod."}}},render:()=>e.jsx(k,{onSubmit:E()})},k=({onSubmit:t})=>{const r=p({resolver:x(C),defaultValues:{username:""}});function n(a){t?.(a),I("You submitted the following values",{description:e.jsx("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(a,null,2)})})})}return e.jsxs(e.Fragment,{children:[e.jsx(l,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4 w-96",children:[e.jsx(w,{control:r.control,name:"username",render:({field:a})=>e.jsxs(b,{children:[e.jsx(f,{children:"Username"}),e.jsx(g,{render:e.jsx(j,{placeholder:"username",...a})}),e.jsx(v,{children:"This is your public display name."}),e.jsx(F,{})]})}),e.jsx(h,{type:"submit",className:"ml-auto block",children:"Submit"})]})}),e.jsx(S,{})]})},s={},i={name:"when typing a valid username, should not show an error message",tags:["!dev","!autodocs"],play:async({canvas:t,step:r})=>{await r("Type a valid username",async()=>{await d.type(await t.findByRole("textbox",{name:/username/i}),"mockuser")}),await r("Click the submit button",async()=>{await d.click(await t.findByRole("button",{name:/submit/i})),o(await t.queryByText(/username must be at least 6 characters/i,{exact:!0})).toBeNull()})}},c={name:"when typing a short username, should show an error message",tags:["!dev","!autodocs"],play:async({canvas:t,step:r})=>{await r("Type a short username",async()=>{await d.type(await t.findByRole("textbox",{name:/username/i}),"fail")}),await r("Click the submit button",async()=>{await d.click(await t.findByRole("button",{name:/submit/i})),o(await t.queryByText(/username must be at least 6 characters/i,{exact:!0})).toBeVisible()})}},R=()=>{try{return T(),e.jsx("div",{children:"This should not render"})}catch(t){return e.jsxs("div",{"data-testid":"error-caught",className:"text-red-500 text-sm",children:["Error: ",t.message]})}},m={name:"Form components should throw error when used outside context",tags:["!dev","!autodocs"],parameters:{a11y:{disable:!0},chromatic:{disableSnapshot:!0}},render:()=>e.jsxs("div",{"data-testid":"context-test",className:"p-4 border border-red-200 bg-red-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"Context Error Test"}),e.jsx("p",{className:"text-red-700 text-sm mb-2",children:"If FormField, FormControl, or other form components are used outside of their proper context, they will throw an error. This component demonstrates that behavior:"}),e.jsx(R,{}),e.jsx("p",{className:"text-red-700 text-xs mt-2",children:"The error above validates that form components properly throw when context is null."})]}),play:async({canvasElement:t,step:r})=>{const n=N(t);await r("verify context error is thrown and caught",async()=>{const a=n.getByTestId("context-test");o(a).toBeInTheDocument();const u=await n.findByTestId("error-caught");o(u).toBeInTheDocument(),o(u.textContent).toMatch(/Error.*useFormField should be used within.*FormField|cannot destructure.*useFormContext/i)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"The default form of the form.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "when typing a valid username, should not show an error message",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvas,
    step
  }) => {
    await step("Type a valid username", async () => {
      await userEvent.type(await canvas.findByRole("textbox", {
        name: /username/i
      }), "mockuser");
    });
    await step("Click the submit button", async () => {
      await userEvent.click(await canvas.findByRole("button", {
        name: /submit/i
      }));
      expect(await canvas.queryByText(/username must be at least 6 characters/i, {
        exact: true
      })).toBeNull();
    });
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "when typing a short username, should show an error message",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvas,
    step
  }) => {
    await step("Type a short username", async () => {
      await userEvent.type(await canvas.findByRole("textbox", {
        name: /username/i
      }), "fail");
    });
    await step("Click the submit button", async () => {
      await userEvent.click(await canvas.findByRole("button", {
        name: /submit/i
      }));
      expect(await canvas.queryByText(/username must be at least 6 characters/i, {
        exact: true
      })).toBeVisible();
    });
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Form components should throw error when used outside context",
  tags: ["!dev", "!autodocs"],
  parameters: {
    a11y: {
      disable: true
    },
    // Disable a11y testing for error demonstration
    chromatic: {
      disableSnapshot: true
    } // Don't snapshot error states
  },
  render: () => <div data-testid="context-test" className="p-4 border border-red-200 bg-red-50 rounded">
      <h3 className="font-semibold text-red-800 mb-2">Context Error Test</h3>
      <p className="text-red-700 text-sm mb-2">
        If FormField, FormControl, or other form components are used outside of
        their proper context, they will throw an error. This component
        demonstrates that behavior:
      </p>
      <InvalidFormFieldUsage />
      <p className="text-red-700 text-xs mt-2">
        The error above validates that form components properly throw when
        context is null.
      </p>
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("verify context error is thrown and caught", async () => {
      const contextTest = canvas.getByTestId("context-test");
      expect(contextTest).toBeInTheDocument();

      // Verify the error was caught and displayed
      const errorMessage = await canvas.findByTestId("error-caught");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage.textContent).toMatch(/Error.*useFormField should be used within.*FormField|cannot destructure.*useFormContext/i);
    });
  }
}`,...m.parameters?.docs?.source}}};const A=["Default","ShouldSucceedWhenValidInput","ShouldShowErrorWhenInvalidInput","ContextErrorTest"];export{m as ContextErrorTest,s as Default,c as ShouldShowErrorWhenInvalidInput,i as ShouldSucceedWhenValidInput,A as __namedExportsOrder,z as default};

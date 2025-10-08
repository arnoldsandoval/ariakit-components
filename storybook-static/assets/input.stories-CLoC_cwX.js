import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as h}from"./button-PHayyMCs.js";import{u as f,a as x,F as y,b,c as g,d as F,f as w,e as S,g as j,o as v,s as E}from"./schemas-IV0wEr4g.js";import{I as l}from"./input-CZ_nX7BA.js";import{L as I}from"./label-CFb4bvFV.js";import{T as N,t as T}from"./sonner-B493d5IB.js";import"./XCKGTAUF-BVIfH-SL.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";import"./VOQWLFSQ-CfksXDZp.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./QJ4LGO2N-ChJddnCk.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";const{expect:B,fn:k,userEvent:u}=__STORYBOOK_MODULE_TEST__,K={title:"ui/Input",component:l,tags:["autodocs"],argTypes:{},args:{className:"max-w-xs",type:"email",placeholder:"Email",disabled:!1,onChange:k()},parameters:{layout:"centered",docs:{description:{component:"Displays a form input field or a component that looks like an input field."}}}},s={},a={args:{type:"file"}},n={args:{disabled:!0}},o={render:t=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(I,{htmlFor:"email",children:"Email"}),e.jsx(l,{...t,id:"email",type:"email",placeholder:"Email"})]})},i={render:t=>e.jsxs("div",{className:"flex w-full max-w-sm items-center space-x-2",children:[e.jsx(l,{...t,type:"email",placeholder:"Email"}),e.jsx(h,{type:"submit",children:"Subscribe"})]})},L=v({username:E().min(2,{message:"Username must be at least 2 characters."})}),m={name:"Form",render:()=>{const t=f({resolver:x(L),defaultValues:{username:""}});function p(r){T("You submitted the following values:",{description:e.jsx("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(r,null,2)})})})}return e.jsxs(e.Fragment,{children:[e.jsx(y,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(p),className:"w-96 space-y-6",children:[e.jsx(b,{control:t.control,name:"username",render:({field:r})=>e.jsxs(g,{children:[e.jsx(F,{children:"Username"}),e.jsx(w,{children:e.jsx(l,{placeholder:"shadcn",...r})}),e.jsx(S,{children:"This is your public display name."}),e.jsx(j,{})]})}),e.jsx(h,{type:"submit",children:"Submit"})]})}),e.jsx(N,{})]})}},c={name:"when user enters text, should see it in the input field",tags:["!dev","!autodocs"],play:async({canvas:t,step:p})=>{const r=await t.findByPlaceholderText(/email/i),d="mocked@shadcn.com";await p("focus and type into the input field",async()=>{await u.click(r),await u.type(r,d)}),B(r).toHaveValue(d)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"A form input component.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "file"
  }
}`,...a.parameters?.docs?.source},description:{story:"A file input component.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source},description:{story:"A disabled input component.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Input>) => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="Email" />
    </div>
}`,...o.parameters?.docs?.source},description:{story:"An input component with a label.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Input>) => <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"An input component with a button.",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Form",
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: ""
      }
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast("You submitted the following values:", {
        description: <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
      });
    }
    return <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6">
            <FormField control={form.control} name="username" render={({
            field
          }) => <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Toaster />
      </>;
  }
}`,...m.parameters?.docs?.source},description:{story:"An input component within a form with validation.",...m.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "when user enters text, should see it in the input field",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvas,
    step
  }) => {
    const input = await canvas.findByPlaceholderText(/email/i);
    const mockedInput = "mocked@shadcn.com";
    await step("focus and type into the input field", async () => {
      await userEvent.click(input);
      await userEvent.type(input, mockedInput);
    });
    expect(input).toHaveValue(mockedInput);
  }
}`,...c.parameters?.docs?.source}}};const q=["Default","File","Disabled","WithLabel","WithButton","FormExample","ShouldEnterText"];export{s as Default,n as Disabled,a as File,m as FormExample,c as ShouldEnterText,i as WithButton,o as WithLabel,q as __namedExportsOrder,K as default};

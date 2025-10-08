import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as te}from"./button-PHayyMCs.js";import{a as ae}from"./XCKGTAUF-BVIfH-SL.js";import{r as i}from"./iframe-CYLbOkOm.js";import{j as ne,f as se,c as ce,_ as re,h as oe,k as ie,l as le,e as M,m as de,g as ue,i as me,d as _,r as he,a as pe}from"./VOQWLFSQ-CfksXDZp.js";import{u as fe}from"./RTNCFSKZ-CUR9m4Ci.js";import{c as be}from"./utils-CBfrqCZ4.js";import{c as ke}from"./createLucideIcon-B4t1phfA.js";import{u as xe,a as ge,F as ve,b as V,c as H,d as O,e as Ce,f as ye,g as we,o as Ne,h as Se,s as je}from"./schemas-IV0wEr4g.js";import{L as N}from"./label-CFb4bvFV.js";import{T as Fe,t as Re}from"./sonner-B493d5IB.js";import"./index-CdJFUDDL.js";import"./preload-helper-PPVm8Dsz.js";import"./QJ4LGO2N-ChJddnCk.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";var Ee=i.createContext(!1),Be=ne(),Te=Be.useContext,q="input";function W(a,s){s?a.indeterminate=!0:a.indeterminate&&(a.indeterminate=!1)}function De(a,s){return a==="input"&&(!s||s==="checkbox")}function U(a){return Array.isArray(a)?a.toString():a}var Le=ce(function(s){var t=s,{store:c,name:u,value:r,checked:l,defaultChecked:I}=t,o=re(t,["store","name","value","checked","defaultChecked"]);const z=Te();c=c||z;const[J,$]=i.useState(I??!1),k=fe(c,n=>{if(l!==void 0)return l;if(n?.value===void 0)return J;if(r!=null){if(Array.isArray(n.value)){const g=U(r);return n.value.includes(g)}return n.value===r}return Array.isArray(n.value)?!1:typeof n.value=="boolean"?n.value:!1}),D=i.useRef(null),K=oe(D,q),m=De(K,o.type),L=k?k==="mixed":void 0,x=k==="mixed"?!1:k,G=ie(o),[Q,X]=le();i.useEffect(()=>{const n=D.current;n&&(W(n,L),!m&&(n.checked=x,u!==void 0&&(n.name=u),r!==void 0&&(n.value=`${r}`)))},[Q,L,m,x,u,r]);const P=o.onChange,Y=M(n=>{if(G){n.stopPropagation(),n.preventDefault();return}if(W(n.currentTarget,L),m||(n.currentTarget.checked=!n.currentTarget.checked,X()),P?.(n),n.defaultPrevented)return;const g=n.currentTarget.checked;$(g),c?.setValue(f=>{if(r==null)return g;const v=U(r);return Array.isArray(f)?g?f.includes(v)?f:[...f,v]:f.filter(ee=>ee!==v):f===v?!1:v})}),A=o.onClick,Z=M(n=>{A?.(n),!n.defaultPrevented&&(m||Y(n))});return o=de(o,n=>e.jsx(Ee.Provider,{value:x,children:n}),[x]),o=ue(_({role:m?void 0:"checkbox",type:m?"checkbox":void 0,"aria-checked":k},o),{ref:me(D,o.ref),onChange:Y,onClick:Z}),o=ae(_({clickOnEnter:!m},o)),he(_({name:m?u:void 0,value:m?r:void 0,checked:x},o))}),_e=se(function(s){const t=Le(s);return pe(q,t)});/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pe=ke("check",Ie),h=i.forwardRef(({className:a,...s},t)=>{const c=i.useRef(null),u=i.useMemo(()=>l=>{c.current=l,typeof t=="function"?t(l):t&&(t.current=l)},[t]),r=i.useCallback(l=>{c.current&&!s.disabled&&(l.preventDefault(),l.stopPropagation(),c.current.click())},[s.disabled]);return e.jsxs("div",{className:"relative",children:[e.jsx(_e,{ref:u,className:"peer sr-only",...s}),e.jsx("div",{"aria-hidden":"true",onClick:r,className:be("h-4 w-4 shrink-0 rounded-[4px] border border-input bg-background shadow-xs","flex items-center justify-center text-current cursor-pointer transition-all","peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2","peer-disabled:opacity-50 peer-disabled:cursor-not-allowed","peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary","[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",a),children:e.jsx(Pe,{className:"h-3.5 w-3.5 transition-opacity"})})]})});h.displayName="Checkbox";h.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const{expect:d,fn:p,userEvent:b,within:S}=__STORYBOOK_MODULE_TEST__,tt={title:"ui/Checkbox",component:h,tags:["autodocs"],argTypes:{},args:{id:"terms",disabled:!1,onChange:p()},render:a=>e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(h,{...a}),e.jsx(N,{htmlFor:a.id,children:"Accept terms and conditions"})]}),parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},C={},y={args:{id:"disabled-terms",disabled:!0}},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(h,{id:"terms2",onChange:p()}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(N,{htmlFor:"terms2",children:"Accept terms and conditions"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"By clicking this checkbox, you agree to the terms and conditions."})]})]}),e.jsxs(N,{className:"hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",children:[e.jsx(h,{id:"notifications-enabled",onChange:p(),className:"peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white dark:peer-checked:border-blue-700 dark:peer-checked:bg-blue-700"}),e.jsxs("div",{className:"grid gap-1.5 font-normal",children:[e.jsx("p",{className:"text-sm leading-none font-medium",children:"Enable notifications"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"You can enable or disable notifications at any time."})]})]})]})},Ye=[{id:"recents",label:"Recents"},{id:"home",label:"Home"},{id:"applications",label:"Applications"},{id:"desktop",label:"Desktop"},{id:"downloads",label:"Downloads"},{id:"documents",label:"Documents"}],Ae=Ne({items:Se(je()).refine(a=>a.some(s=>s),{message:"You have to select at least one item."})}),j={name:"Form",render:()=>{const a=xe({resolver:ge(Ae),defaultValues:{items:["recents","home"]}});function s(t){Re("You submitted the following values",{description:e.jsx("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(t,null,2)})})})}return e.jsxs(e.Fragment,{children:[e.jsx(ve,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(s),className:"space-y-8",children:[e.jsx(V,{control:a.control,name:"items",render:()=>e.jsxs(H,{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(O,{className:"text-base",children:"Sidebar"}),e.jsx(Ce,{children:"Select the items you want to display in the sidebar."})]}),Ye.map(t=>e.jsx(V,{control:a.control,name:"items",render:({field:c})=>e.jsxs(H,{className:"flex flex-row items-center gap-2",children:[e.jsx(ye,{render:e.jsx(h,{checked:c.value?.includes(t.id),onChange:u=>(p()(u),u.target.checked?c.onChange([...c.value,t.id]):c.onChange(c.value?.filter(l=>l!==t.id)))})}),e.jsx(O,{className:"text-sm font-normal",children:t.label})]},t.id)})),e.jsx(we,{})]})}),e.jsx(te,{type:"submit",children:"Submit"})]})}),e.jsx(Fe,{})]})}},F={name:"when the checkbox is clicked, should toggle between checked and not checked",tags:["!dev","!autodocs"],args:{onChange:p()},play:async({canvasElement:a})=>{const t=await S(a).getByRole("checkbox");await b.click(t),d(t).toBeChecked(),await b.click(t,{delay:100}),d(t).not.toBeChecked(),await b.click(t,{delay:100}),d(t).toBeChecked()}},R={name:"when the visual div is clicked, should toggle checkbox state",tags:["!dev","!autodocs"],args:{onChange:p()},play:async({canvasElement:a})=>{const t=await S(a).getByRole("checkbox"),c=a.querySelector('[aria-hidden="true"]');d(t).not.toBeChecked(),await b.click(c),d(t).toBeChecked(),await b.click(c),d(t).not.toBeChecked()}},E={name:"when disabled visual div is clicked, should not toggle",tags:["!dev","!autodocs"],args:{disabled:!0,defaultChecked:!1},play:async({canvasElement:a})=>{const t=await S(a).getByRole("checkbox"),c=a.querySelector('[aria-hidden="true"]');d(t).not.toBeChecked(),d(t).toBeDisabled(),await b.click(c),d(t).not.toBeChecked()}},B={name:"ref forwarding works with callback refs",tags:["!dev","!autodocs"],render:()=>{const[a,s]=i.useState(null);return e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(h,{id:"callback-ref-test",onChange:p(),ref:t=>s(t)}),e.jsxs(N,{htmlFor:"callback-ref-test",children:["Input accessible: ",a?"Yes":"No"]})]})},play:async({canvasElement:a})=>{const t=await S(a).getByText(/Input accessible:/);d(t).toHaveTextContent("Yes")}},T={name:"ref forwarding works with useRef objects",tags:["!dev","!autodocs"],render:()=>{const a=i.useRef(null),[s,t]=i.useState(!1);return i.useEffect(()=>{t(!!a.current)}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(h,{id:"useref-test",onChange:p(),ref:a}),e.jsxs(N,{htmlFor:"useref-test",children:["Ref populated: ",s?"Yes":"No"]})]})},play:async({canvasElement:a})=>{const t=await S(a).getByText(/Ref populated:/);d(t).toHaveTextContent("Yes")}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"{}",...C.parameters?.docs?.source},description:{story:"The default form of the checkbox.",...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-terms",
    disabled: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Use the `disabled` prop to disable the checkbox.",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex items-start gap-3">
        <Checkbox id="terms2" onChange={fn()} />
        <div className="grid gap-2">
          <Label htmlFor="terms2">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>

      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox id="notifications-enabled" onChange={fn()} className="peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white dark:peer-checked:border-blue-700 dark:peer-checked:bg-blue-700" />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Various complex examples of the checkbox.",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Form",
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        items: ["recents", "home"]
      }
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast("You submitted the following values", {
        description: <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
      });
    }
    return <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="items" render={() => <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Sidebar</FormLabel>
                    <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription>
                  </div>
                  {items.map(item => <FormField control={form.control} name="items" render={({
              field
            }) => {
              return <FormItem key={item.id} className="flex flex-row items-center gap-2">
                            <FormControl render={<Checkbox checked={field.value?.includes(item.id)} onChange={event => {
                  fn()(event);
                  const checked = event.target.checked;
                  return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter(value => value !== item.id));
                }} />} />

                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>;
            }} />)}
                  <FormMessage />
                </FormItem>} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Toaster />
      </>;
  }
}`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "when the checkbox is clicked, should toggle between checked and not checked",
  tags: ["!dev", "!autodocs"],
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox, {
      delay: 100
    });
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox, {
      delay: 100
    });
    expect(checkbox).toBeChecked();
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "when the visual div is clicked, should toggle checkbox state",
  tags: ["!dev", "!autodocs"],
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole("checkbox");
    const visualDiv = canvasElement.querySelector('[aria-hidden="true"]') as HTMLElement;
    expect(checkbox).not.toBeChecked();

    // Click the visual div directly
    await userEvent.click(visualDiv);
    expect(checkbox).toBeChecked();
    await userEvent.click(visualDiv);
    expect(checkbox).not.toBeChecked();
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "when disabled visual div is clicked, should not toggle",
  tags: ["!dev", "!autodocs"],
  args: {
    disabled: true,
    defaultChecked: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole("checkbox");
    const visualDiv = canvasElement.querySelector('[aria-hidden="true"]') as HTMLElement;
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeDisabled();

    // Click the visual div - should not change state when disabled
    await userEvent.click(visualDiv);
    expect(checkbox).not.toBeChecked();
  }
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "ref forwarding works with callback refs",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [inputElement, setInputElement] = React.useState<HTMLInputElement | null>(null);
    return <div className="flex space-x-2">
        <Checkbox id="callback-ref-test" onChange={fn()} ref={node => setInputElement(node)} />
        <Label htmlFor="callback-ref-test">
          Input accessible: {inputElement ? "Yes" : "No"}
        </Label>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByText(/Input accessible:/);

    // Verify parent components can access the input element via callback ref
    expect(label).toHaveTextContent("Yes");
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "ref forwarding works with useRef objects",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    const [isRefSet, setIsRefSet] = React.useState(false);
    React.useEffect(() => {
      // Check if ref is set after render
      setIsRefSet(!!checkboxRef.current);
    });
    return <div className="flex space-x-2">
        <Checkbox id="useref-test" onChange={fn()} ref={checkboxRef} />
        <Label htmlFor="useref-test">
          Ref populated: {isRefSet ? "Yes" : "No"}
        </Label>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByText(/Ref populated:/);

    // Verify parent components can access the input element via ref object
    expect(label).toHaveTextContent("Yes");
  }
}`,...T.parameters?.docs?.source}}};const at=["Default","Disabled","ComplexExamples","FormMultiple","ShouldToggleCheck","ShouldToggleWhenVisualDivClicked","ShouldNotToggleWhenDisabledVisualDivClicked","RefForwardingWithCallbackRef","RefForwardingWithRefObject"];export{w as ComplexExamples,C as Default,y as Disabled,j as FormMultiple,B as RefForwardingWithCallbackRef,T as RefForwardingWithRefObject,E as ShouldNotToggleWhenDisabledVisualDivClicked,F as ShouldToggleCheck,R as ShouldToggleWhenVisualDivClicked,at as __namedExportsOrder,tt as default};

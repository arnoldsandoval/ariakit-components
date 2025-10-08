import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as I,B as x}from"./button-PHayyMCs.js";import{c as s}from"./utils-CBfrqCZ4.js";import{H as U,u as O,D as K,a as W}from"./ZTXFEM5L-DDFiAw7X.js";import{b as q,u as G,c as J,d as Q}from"./NMGNQVTG-CZ8g0E-x.js";import{f as w,c as _,a as H,_ as k,u as P,b as R,d as N,r as X,e as Z,g as L,h as ee,i as ne}from"./VOQWLFSQ-CfksXDZp.js";import{r as h}from"./iframe-CYLbOkOm.js";import{u as te}from"./XCKGTAUF-BVIfH-SL.js";import"./index-CdJFUDDL.js";import"./index-BEMiEEFp.js";import"./index-DTK1cw6Y.js";import"./RTNCFSKZ-CUR9m4Ci.js";import"./QJ4LGO2N-ChJddnCk.js";import"./preload-helper-PPVm8Dsz.js";var oe="p",re=_(function(n){var o=n,{store:i}=o,r=k(o,["store"]);const a=h.useContext(q),l=P(r.id);return R(()=>(a?.(l),()=>a?.(void 0)),[a,l]),r=N({id:l},r),X(r)}),ae=w(function(n){const o=re(n);return H(oe,o)}),ie="button",le=_(function(n){var o=n,{store:i}=o,r=k(o,["store"]);const a=G();i=i||a;const l=r.onClick,M=Z(S=>{l?.(S),!S.defaultPrevented&&i?.hide()}),z=h.useMemo(()=>e.jsxs("svg",{"aria-label":"Dismiss popup",display:"block",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,viewBox:"0 0 16 16",height:"1em",width:"1em",children:[e.jsx("line",{x1:"4",y1:"4",x2:"12",y2:"12"}),e.jsx("line",{x1:"4",y1:"12",x2:"12",y2:"4"})]}),[]);return r=L(N({"data-dialog-dismiss":"",children:z},r),{onClick:M}),r=te(r),r}),V=w(function(n){const o=le(n);return H(ie,o)}),se="h1",Y=_(function(n){const o=h.useRef(null),i=h.useContext(U)||1,r=`h${i}`,a=ee(o,r),l=h.useMemo(()=>!!a&&/^h\d$/.test(a),[a]);return n=L(N({render:e.jsx(r,{}),role:l?void 0:"heading","aria-level":l?void 0:i},n),{ref:ne(o,n.ref)}),n});w(function(n){const o=Y(n);return H(se,o)});var ce="h1",de=_(function(n){var o=n,{store:i}=o,r=k(o,["store"]);const a=h.useContext(J),l=P(r.id);return R(()=>(a?.(l),()=>a?.(void 0)),[a,l]),r=N({id:l},r),r=Y(r),r}),ge=w(function(n){const o=de(n);return H(ce,o)});function ue(t={}){const n=O(t);return e.jsx(Q,{value:n,children:t.children})}function c({children:t,...n}){const o=O(n);return e.jsx(ue,{store:o,"data-slot":"alert-dialog",children:t})}function d({...t}){return e.jsx(K,{"data-slot":"alert-dialog-trigger",...t})}function $({className:t,...n}){return e.jsx("div",{"data-slot":"alert-dialog-overlay",className:s("fixed inset-0 z-50 bg-black/50","opacity-0 transition-opacity duration-200","data-[enter]:opacity-100",t),...n})}function g({className:t,children:n,...o}){return e.jsx(W,{role:"alertdialog","data-slot":"alert-dialog-content",className:s("bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg","opacity-0 scale-95 transition-all duration-200","data-[enter]:opacity-100 data-[enter]:scale-100",t),backdrop:e.jsx($,{}),...o,children:n})}function u({className:t,...n}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",t),...n})}function D({className:t,...n}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...n})}function p({className:t,...n}){return e.jsx(ge,{"data-slot":"alert-dialog-title",className:s("text-lg font-semibold",t),...n})}function v({className:t,...n}){return e.jsx(ae,{"data-slot":"alert-dialog-description",className:s("text-muted-foreground text-sm",t),...n})}function m({className:t,variant:n,size:o,...i}){return e.jsx(V,{className:s(I({variant:n,size:o}),t),...i})}function A({className:t,...n}){return e.jsx(V,{className:s(I({variant:"outline"}),t),...n})}c.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};A.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};v.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};$.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};const{fn:B,userEvent:E,within:F}=__STORYBOOK_MODULE_TEST__,_e={title:"ui/AlertDialog",component:c,tags:["autodocs"],argTypes:{},parameters:{layout:"centered",docs:{description:{component:`A modal dialog that interrupts the user with important content and expects
a response.`}}}},y={render:()=>{const t=B(),n=B();return e.jsxs(c,{children:[e.jsx(d,{render:e.jsx(x,{variant:"outline"}),children:"Show Dialog"}),e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Are you absolutely sure?"}),e.jsx(v,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(D,{children:[e.jsx(A,{onClick:()=>t("Dialog cancelled"),children:"Cancel"}),e.jsx(m,{onClick:()=>n("Dialog confirmed"),children:"Continue"})]})]})]})}},f={render:()=>e.jsxs(c,{children:[e.jsx(d,{render:e.jsx(x,{variant:"destructive"}),children:"Delete Account"}),e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Are you absolutely sure?"}),e.jsx(v,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(D,{children:[e.jsx(A,{children:"Cancel"}),e.jsx(m,{variant:"destructive",children:"Yes, delete account"})]})]})]})},j={render:()=>e.jsxs(c,{children:[e.jsx(d,{render:e.jsx(x,{}),children:"Save Changes"}),e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Save changes?"}),e.jsx(v,{children:"You have unsaved changes. Do you want to save them before leaving?"})]}),e.jsxs(D,{children:[e.jsx(A,{children:"Don't Save"}),e.jsx(m,{children:"Save Changes"})]})]})]})},C={render:()=>e.jsxs(c,{children:[e.jsx(d,{render:e.jsx(x,{variant:"outline"}),children:"Open Dialog"}),e.jsxs(g,{children:[e.jsx(u,{children:e.jsx(p,{children:"Delete this item?"})}),e.jsxs(D,{children:[e.jsx(A,{children:"Cancel"}),e.jsx(m,{children:"Delete"})]})]})]})},T={render:()=>e.jsxs(c,{children:[e.jsx(d,{render:e.jsx(x,{variant:"outline"}),children:"View Terms"}),e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Terms and Conditions"}),e.jsx(v,{children:'Please read and accept our terms and conditions before proceeding. By clicking "Accept", you agree to be bound by our terms of service and acknowledge that you have read our privacy policy. This includes consent to process your data as outlined in our documentation.'})]}),e.jsxs(D,{children:[e.jsx(A,{children:"Decline"}),e.jsx(m,{children:"Accept"})]})]})]})},b={name:"when alert dialog trigger is pressed, should open the dialog and be able to close it",tags:["!dev","!autodocs"],render:()=>e.jsxs(c,{children:[e.jsx(d,{render:e.jsx(x,{variant:"outline"}),children:"Open"}),e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Are you absolutely sure?"}),e.jsx(v,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(D,{children:[e.jsx(A,{children:"Cancel"}),e.jsx(m,{children:"Continue"})]})]})]}),play:async({canvasElement:t,step:n})=>{const o=F(t),i=F(t.ownerDocument.body);await n("open the alert dialog",async()=>{await E.click(await o.getByRole("button",{name:/open/i}))}),await n("close the alert dialog",async()=>{await E.click(await i.getByRole("button",{name:/cancel/i}),{delay:100})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onCancel = fn();
    const onAction = fn();
    return <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => onCancel("Dialog cancelled")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => onAction("Dialog confirmed")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...y.parameters?.docs?.source},description:{story:"The default alert dialog with cancel and continue buttons.",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Yes, delete account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...f.parameters?.docs?.source},description:{story:"Alert dialog with a destructive action.",...f.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button />}>
        Save Changes
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Save changes?</AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes. Do you want to save them before leaving?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don't Save</AlertDialogCancel>
          <AlertDialogAction>Save Changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...j.parameters?.docs?.source},description:{story:"Alert dialog with custom button text.",...j.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this item?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...C.parameters?.docs?.source},description:{story:"Alert dialog without a description.",...C.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        View Terms
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription>
            Please read and accept our terms and conditions before proceeding.
            By clicking "Accept", you agree to be bound by our terms of service
            and acknowledge that you have read our privacy policy. This includes
            consent to process your data as outlined in our documentation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...T.parameters?.docs?.source},description:{story:"Alert dialog with longer content.",...T.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "when alert dialog trigger is pressed, should open the dialog and be able to close it",
  tags: ["!dev", "!autodocs"],
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Open
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const canvasBody = within(canvasElement.ownerDocument.body);
    await step("open the alert dialog", async () => {
      await userEvent.click(await canvas.getByRole("button", {
        name: /open/i
      }));
    });
    await step("close the alert dialog", async () => {
      await userEvent.click(await canvasBody.getByRole("button", {
        name: /cancel/i
      }), {
        delay: 100
      });
    });
  }
}`,...b.parameters?.docs?.source}}};const He=["Default","Destructive","CustomButtons","NoDescription","LongContent","ShouldOpenClose"];export{j as CustomButtons,y as Default,f as Destructive,T as LongContent,C as NoDescription,b as ShouldOpenClose,He as __namedExportsOrder,_e as default};

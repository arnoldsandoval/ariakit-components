import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./index-CdJFUDDL.js";import{c as g}from"./utils-CBfrqCZ4.js";import{c as h}from"./createLucideIcon-B4t1phfA.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],A=h("circle-alert",w);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],x=h("circle-check",T);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],y=h("info",N);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],v=h("terminal",D);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_=h("triangle-alert",k),S=j("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function r({className:n,variant:a,...f}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:g(S({variant:a}),n),...f})}function s({className:n,...a}){return e.jsx("div",{"data-slot":"alert-title",className:g("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",n),...a})}function t({className:n,...a}){return e.jsx("div",{"data-slot":"alert-description",className:g("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",n),...a})}r.__docgenInfo={description:"",methods:[],displayName:"Alert"};t.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};s.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};const M={title:"ui/Alert",component:r,tags:["autodocs"],argTypes:{variant:{options:["default","destructive"],control:{type:"radio"},description:"The visual style of the alert"}},args:{variant:"default"},parameters:{layout:"padded",docs:{description:{component:"Displays a callout for user attention."}}}},i={render:()=>e.jsxs(r,{children:[e.jsx(v,{className:"h-4 w-4"}),e.jsx(s,{children:"Heads up!"}),e.jsx(t,{children:"You can add components to your app using the cli."})]})},c={render:()=>e.jsxs(r,{variant:"destructive",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(s,{children:"Error"}),e.jsx(t,{children:"Your session has expired. Please log in again."})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Heads up!"}),e.jsx(t,{children:"You can add components to your app using the cli."})]})},l={render:()=>e.jsxs(r,{children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(t,{children:"This is an informational message with only a description."})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(_,{className:"h-4 w-4"}),e.jsx(s,{children:"Warning"}),e.jsx(t,{children:"This action cannot be undone. Please proceed with caution."})]})},p={render:()=>e.jsxs(r,{children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(s,{children:"Success!"}),e.jsx(t,{children:"Your changes have been saved successfully."})]})},m={render:()=>e.jsxs(r,{children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(s,{children:"Important Information"}),e.jsx(t,{children:"This is a longer alert message that demonstrates how the component handles multiple lines of text. The alert will expand vertically to accommodate the content while maintaining proper spacing and alignment between the icon, title, and description areas."})]})},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{children:[e.jsx(v,{className:"h-4 w-4"}),e.jsx(s,{children:"Heads up!"}),e.jsx(t,{children:"You can add components to your app using the cli."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(s,{children:"Error"}),e.jsx(t,{children:"Your session has expired. Please log in again."})]}),e.jsxs(r,{children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(s,{children:"Success!"}),e.jsx(t,{children:"Your changes have been saved successfully."})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...i.parameters?.docs?.source},description:{story:"The default alert with an icon, title and description.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...c.parameters?.docs?.source},description:{story:"Use the `destructive` variant to indicate an error or destructive action.",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...o.parameters?.docs?.source},description:{story:"Alert without an icon.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <Info className="h-4 w-4" />
      <AlertDescription>
        This is an informational message with only a description.
      </AlertDescription>
    </Alert>
}`,...l.parameters?.docs?.source},description:{story:"Alert with only a description and no title.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action cannot be undone. Please proceed with caution.
      </AlertDescription>
    </Alert>
}`,...d.parameters?.docs?.source},description:{story:"Alert with a warning style using default variant.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
}`,...p.parameters?.docs?.source},description:{story:"Alert with a success message using default variant.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Important Information</AlertTitle>
      <AlertDescription>
        This is a longer alert message that demonstrates how the component
        handles multiple lines of text. The alert will expand vertically to
        accommodate the content while maintaining proper spacing and alignment
        between the icon, title, and description areas.
      </AlertDescription>
    </Alert>
}`,...m.parameters?.docs?.source},description:{story:"Alert with longer content demonstrating text wrapping.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Multiple alerts stacked to show spacing.",...u.parameters?.docs?.description}}};const P=["Default","Destructive","NoIcon","DescriptionOnly","Warning","Success","LongContent","Stacked"];export{i as Default,l as DescriptionOnly,c as Destructive,m as LongContent,o as NoIcon,u as Stacked,p as Success,d as Warning,P as __namedExportsOrder,M as default};

import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as k}from"./QJ4LGO2N-ChJddnCk.js";import{c as d}from"./utils-CBfrqCZ4.js";import{C as I}from"./chevron-right-BNPKpNjC.js";import{c as j}from"./createLucideIcon-B4t1phfA.js";import"./VOQWLFSQ-CfksXDZp.js";import"./iframe-CYLbOkOm.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],y=j("ellipsis",L);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],x=j("slash",S);function o({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function m({className:e,...n}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:d("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...n})}function s({className:e,...n}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:d("inline-flex items-center gap-1.5",e),...n})}function c({className:e,render:n,children:t,...h}){return r.jsx(k,{"data-slot":"breadcrumb-link",className:d("hover:text-foreground transition-colors",e),render:n||(f=>r.jsx("a",{...f})),...h,children:t})}function i({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:d("text-foreground font-normal",e),...n})}function a({children:e,className:n,...t}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:d("[&>svg]:size-3.5",n),...t,children:e??r.jsx(I,{})})}function g({className:e,...n}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:d("flex size-9 items-center justify-center",e),...n,children:[r.jsx(y,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const w={title:"ui/Breadcrumb",component:o,tags:["autodocs"],argTypes:{},args:{},render:e=>r.jsx(o,{...e,children:r.jsxs(m,{children:[r.jsx(s,{children:r.jsx(c,{children:"Home"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(c,{children:"Components"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(i,{children:"Breadcrumb"})})]})}),parameters:{layout:"centered",docs:{description:{component:"Displays the path to the current resource using a hierarchy of links."}}}},u={},p={render:e=>r.jsx(o,{...e,children:r.jsxs(m,{children:[r.jsx(s,{children:r.jsx(c,{children:"Home"})}),r.jsx(a,{children:r.jsx(x,{})}),r.jsx(s,{children:r.jsx(c,{children:"Components"})}),r.jsx(a,{children:r.jsx(x,{})}),r.jsx(s,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},l={render:e=>{const n=({href:t,...h})=>r.jsx("a",{href:t,...h});return r.jsx(o,{...e,children:r.jsxs(m,{children:[r.jsx(s,{children:r.jsx(c,{render:t=>r.jsx(n,{href:"/",...t}),children:"Home"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(c,{render:t=>r.jsx(n,{href:"/components",...t}),children:"Components"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(i,{children:"Breadcrumb"})})]})})}},b={render:e=>r.jsx(o,{...e,children:r.jsxs(m,{children:[r.jsx(s,{children:r.jsx(c,{render:n=>r.jsx("button",{type:"button",...n}),children:"Home"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(c,{render:n=>r.jsx("button",{type:"button",...n}),children:"Components"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},B={render:e=>r.jsx(o,{...e,children:r.jsxs(m,{children:[r.jsx(s,{children:r.jsx(c,{children:"Home"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(g,{})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(c,{children:"Components"})}),r.jsx(a,{}),r.jsx(s,{children:r.jsx(i,{children:"Breadcrumb"})})]})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source},description:{story:"Displays the path of links to the current resource.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...p.parameters?.docs?.source},description:{story:"Use a custom component as children for BreadcrumbSeparator to create a custom separator.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    // Example router link component (like Next.js Link)
    const RouterLink = ({
      href,
      ...props
    }: any) => <a href={href} {...props} />;
    return <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={props => <RouterLink href="/" {...props} />}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={props => <RouterLink href="/components" {...props} />}>
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>;
  }
}`,...l.parameters?.docs?.source},description:{story:`Use the render prop to render breadcrumb links as Next.js Link components 
or other router link components.`,...l.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={props => <button type="button" {...props} />}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink render={props => <button type="button" {...props} />}>
            Components  
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...b.parameters?.docs?.source},description:{story:"Use the render prop to create breadcrumb links with custom elements like buttons.",...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...B.parameters?.docs?.source},description:{story:"Use BreadcrumbEllipsis to indicate collapsed breadcrumb items in long navigation paths.",...B.parameters?.docs?.description}}};const z=["Default","WithCustomSeparator","AsRouterLinks","AsButtons","WithEllipsis"];export{b as AsButtons,l as AsRouterLinks,u as Default,p as WithCustomSeparator,B as WithEllipsis,z as __namedExportsOrder,w as default};

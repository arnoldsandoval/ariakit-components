import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-CBfrqCZ4.js";function s({ratio:e=1,className:i,children:n,style:p,...d}){return a.jsx("div",{"data-slot":"aspect-ratio",className:l("relative w-full",i),style:{aspectRatio:e,...p},...d,children:n})}s.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const h={title:"ui/AspectRatio",component:s,tags:["autodocs"],argTypes:{ratio:{control:"number",description:"The desired aspect ratio"}},parameters:{layout:"centered",docs:{description:{component:"Displays content within a desired ratio."}}}},o={render:e=>a.jsx(s,{...e,className:"bg-muted",children:a.jsx("img",{src:"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80",alt:"Photo by Alvaro Pinot",className:"rounded-md object-cover w-full h-full"})}),args:{ratio:16/9}},t={render:e=>a.jsx(s,{...e,className:"bg-muted",children:a.jsx("img",{src:"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80",alt:"Photo by Alvaro Pinot",className:"rounded-md object-cover w-full h-full"})}),args:{ratio:1}},r={render:e=>a.jsx(s,{...e,className:"bg-muted",children:a.jsx("img",{src:"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80",alt:"Photo by Alvaro Pinot",className:"rounded-md object-cover w-full h-full"})}),args:{ratio:4/3}},c={render:e=>a.jsx(s,{...e,className:"bg-muted",children:a.jsx("img",{src:"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80",alt:"Photo by Alvaro Pinot",className:"rounded-md object-cover w-full h-full"})}),args:{ratio:2.35/1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <AspectRatio {...args} className="bg-muted">
      <img src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80" alt="Photo by Alvaro Pinot" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>,
  args: {
    ratio: 16 / 9
  }
}`,...o.parameters?.docs?.source},description:{story:"A component that displays an image with a 16:9 aspect ratio.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <AspectRatio {...args} className="bg-muted">
      <img src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80" alt="Photo by Alvaro Pinot" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>,
  args: {
    ratio: 1
  }
}`,...t.parameters?.docs?.source},description:{story:"Use the `1:1` aspect ratio to display a square image.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <AspectRatio {...args} className="bg-muted">
      <img src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80" alt="Photo by Alvaro Pinot" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>,
  args: {
    ratio: 4 / 3
  }
}`,...r.parameters?.docs?.source},description:{story:"Use the `4:3` aspect ratio to display a landscape image.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <AspectRatio {...args} className="bg-muted">
      <img src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80" alt="Photo by Alvaro Pinot" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>,
  args: {
    ratio: 2.35 / 1
  }
}`,...c.parameters?.docs?.source},description:{story:"Use the `2.35:1` aspect ratio to display a cinemascope image.",...c.parameters?.docs?.description}}};const g=["Default","Square","Landscape","Cinemascope"];export{c as Cinemascope,o as Default,r as Landscape,t as Square,g as __namedExportsOrder,h as default};

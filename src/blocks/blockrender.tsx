import HeroWordpress from "./Hero/heroWordpress";
import LabelWordpress from "./Label/labelWordpress";

export default function Blockrender({page, posts}: { page:any, posts:any}){
    const blocks = page?.acf?.blocks;

    if(!blocks) return
    return blocks?.map((block:any, index:number) => {
        switch (block.acf_fc_layout){
            case "hero":
                return <HeroWordpress data={block} key={index}/>
            case "label":
                return <LabelWordpress data={block} key={index}/>
        }
    })
}

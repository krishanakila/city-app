import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CategoryTabs() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="tab-list">
        <TabsTrigger value="all"><img src="/icons/all-icon.png" alt=""/>All</TabsTrigger>
        <TabsTrigger value="dessert"><img src="/icons/dessert.png" alt=""/> Dessert</TabsTrigger>
        <TabsTrigger value="beauty"><img src="/icons/beauty.png" alt=""/>Beauty</TabsTrigger>
        <TabsTrigger value="retail"><img src="/icons/retails.png" alt=""/>Retail</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

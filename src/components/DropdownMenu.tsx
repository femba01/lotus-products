import { Button, Menu, Portal } from "@chakra-ui/react"
import { Filter } from "lucide-react";

interface DropdownMenuProps {
    title?: string | React.ReactNode    ;
   items?: string[];
    onCategoryChange?: (category: string) => void;
}

const DropdownMenu = ({ title = "Filter By", items, onCategoryChange }: DropdownMenuProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" className="bg-white border py-2 px-4 text-gray-500 rounded-lg flex items-center gap-2">
          {!title && <Filter/>} {title}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items?.map((item) => (
              <Menu.Item key={item} value={item} onClick={()=> onCategoryChange?.(item)}>
                {item}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default DropdownMenu;
import { Controller } from "@nestjs/common";
import { InventoryService } from "./inventory.service";

//@ApiTags()
@Controller('Inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }
}
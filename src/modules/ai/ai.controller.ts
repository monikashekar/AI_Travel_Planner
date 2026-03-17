import { Controller, Post, Body } from "@nestjs/common";
import { AiService } from "./ai.service";

@Controller("ai")
export class AiController {

  constructor(private aiService: AiService) {}

  @Post("generate-itinerary")
  generate(@Body() body: any) {
    return this.aiService.generateItinerary(
      body.destination,
      body.days,
      body.interests
    );
  }

}
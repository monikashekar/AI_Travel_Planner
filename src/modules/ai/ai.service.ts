import { Injectable } from "@nestjs/common";
import Groq from "groq-sdk";

@Injectable()
export class AiService {

  private groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
  });

  async generateItinerary(destination: string, days: number, interests: string[]) {

    const prompt = `
    Create a ${days}-day travel itinerary for ${destination}.
    Interests: ${interests.join(", ")}.

    Return ONLY JSON in this format:

    [
      {
        "day": 1,
        "activities": ["Activity 1", "Activity 2"]
      }
    ]
    `;

    const response = await this.groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return response.choices[0].message.content;
  }
}
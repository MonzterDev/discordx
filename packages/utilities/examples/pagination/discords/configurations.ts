import { Discord, Slash } from "discordx";
import { CommandInteraction } from "discord.js";
import { GeneratePages } from "../util/common functions";
import { sendPaginatedEmbeds } from "../../../src";

@Discord()
export abstract class Example {
  // example: simple slash with menu pagination
  @Slash("configexample", { description: "Custom page name for select menu" })
  async pagex(interaction: CommandInteraction): Promise<void> {
    await sendPaginatedEmbeds(interaction, GeneratePages(), {
      type: "SELECT_MENU",
      pageText: "My custom page: {page}, Index: {page}",
    });
  }
}

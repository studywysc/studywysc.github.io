from redbot.core import Config, commands, checks
from redbot.cogs.admin import admin
from array import *
# from dhooks import Webhook, Embed # Keeping for the future
import asyncio
import aiohttp
import discord
import time
import random

class cogstaff(commands.Cog):
    """A cog with commands for Wysc Staff"""

    def __init__(self):
        self.config = Config.get_conf(self, identifier=760098403388227625)
        default_guild = {
            "muterole": ""
        }
        self.config.register_guild(**default_guild)

    async def red_get_data_for_user(self, *, user_id: int):
        # this cog does not story any data
        return {}

    async def red_delete_data_for_user(self, *, requester, user_id: int) -> None:
        # this cog does not story any data
        pass

    @commands.command()
    @checks.admin()
    async def setmuterole(self, ctx, message):
        """Set permissions requiring treerole
        """
        await self.config.guild(ctx.guild).muterole.set(message)
        await ctx.send("Set muterole to " + message)

    @commands.command()
    @checks.mod()
    async def nsfw(self, ctx, *, user: discord.Member=None):

        if not user:
            return ctx.send("no user specified")

        await ctx.send("hello " + user)

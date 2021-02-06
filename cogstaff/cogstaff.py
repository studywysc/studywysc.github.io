from redbot.core import Config, commands, checks
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
            "treerole": "",
            "pondrole": "",
            "lakerole": ""
        }
        self.config.register_guild(**default_guild)

    @commands.command()
    @checks.admin_or_permissions(manage_guild=True)
    async def configtree(self, ctx, message):
        await self.config.guild(ctx.guild).configtree.set(message)
        await ctx.send("Set treerole to " + message)

    

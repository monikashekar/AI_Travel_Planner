import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt-auth.guard";
import { PrismaService } from "src/infrastructure/database/prisma.service";

@Controller("auth")
export class AuthController {

  constructor(private authService: AuthService, 
    private prisma: PrismaService) {}

  @Post("register")
  register(@Body() data: RegisterDto) {
    return this.authService.register(data);
  }

  @Post("login")
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  async getMe(@Req() req) {

    const userId = req.user.userId;

    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      }
    });

  }
}
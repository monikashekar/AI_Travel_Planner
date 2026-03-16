import { Get, Injectable, Req, UnauthorizedException, UseGuards } from "@nestjs/common";
import { PrismaService } from "../../infrastructure/database/prisma.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt-auth.guard";

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(data: any) {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name
      }
    });

    return this.generateToken(user.id);
  }

  async login(data: any) {

    const user = await this.prisma.user.findUnique({
      where: { email: data.email }
    });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const valid = await bcrypt.compare(data.password, user.password);

    if (!valid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.generateToken(user.id);
  }

  generateToken(userId: string) {

    const payload = { sub: userId };

    return {
      access_token: this.jwtService.sign(payload)
    };

  }

 
}
import { applyDecorators, Get, UseGuards } from "@nestjs/common";
import { School } from "./school.decorator";
import { SchoolGuard } from "./school.guard";

export function Merge(path, role) {
  return applyDecorators(
    Get(path),
    School(role),
    UseGuards(SchoolGuard)
  )
}
"use client";
import React from "react";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Componentse/ui/select";

const CourseFilters = ({ setFilters }: any) => {
  return (
    <div className="p-3 border h-fit rounded-lg border-[#1b1b1b] flex flex-col gap-3">
      <div className="flex justify-between gap-3">
        <div>
          <h1 className="text-white text-xl font-bold">Filters</h1>
        </div>
        <div>
          <Filter color="#fff" />
        </div>
      </div>
      <div>
        <Select
          onValueChange={(value: string) => {
            setFilters((prev: any) => ({ ...prev, category: value }));
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="art">Art</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select
          onValueChange={(value: string) => {
            setFilters((prev: any) => ({ ...prev, skillLevel: value }));
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Skill" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select
          onValueChange={(value: string) => {
            setFilters((prev: any) => ({ ...prev, language: value }));
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CourseFilters;

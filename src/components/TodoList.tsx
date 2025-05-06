"use client";
import { CheckboxWithText } from "./mini_comp/CheckboxWithText";
import { Card } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";

let dummy = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className="text-lg font-medium mb-6">Borwser usage</h1>
      {/* CALENER */}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(data) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea
        className="max-h-[300px] overflow-y-auto mt-4  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-900
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 px-2"
      >
        <div className="flex flex-col gap-4">
          {dummy.map((v, i) => {
            return (
              <Card className="p-4" key={v}>
                <CheckboxWithText
                  itemId={`item${i}`}
                  para=""
                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
};

export default TodoList;

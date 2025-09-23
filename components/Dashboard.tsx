"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const initialData: Plan[] = [
  { id: "plan_basic", planName: "Legal Lite", planType: "basic", price: 499 },
  { id: "plan_pro", planName: "Legal Pro", planType: "pro", price: 1499 },
  { id: "plan_enterprise", planName: "Enterprise", planType: "enterprise", price: 4999 },
];

const STORAGE_KEY = "sida_plans_v1";

export type Plan = {
  id: string;
  planName: string;
  planType: "basic" | "pro" | "enterprise" | string;
  price: number;
};

// columns will be created inside the Dashboard component so they can access handlers directly

export function Dashboard() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [data, setData] = useState<Plan[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Plan[];
    } catch {
      // ignore
    }
    return initialData;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  const [editing, setEditing] = useState<Plan | null>(null);
  const [form, setForm] = useState<{
    planName: string;
    planType: Plan["planType"];
    price: string;
  }>({ planName: "", planType: "basic", price: "" });

  // Alert dialog state for delete confirmation
  const [openAlert, setOpenAlert] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<Payment | null>(null);

  function resetForm() {
    setForm({ email: "", amount: "", status: "pending" });
    setEditing(null);
  }

  function handleAdd() {
    const newPlan: Plan = {
      id: Math.random().toString(36).slice(2, 9),
      planName: form.planName || "New Plan",
      planType: form.planType,
      price: Number(form.price) || 0,
    };
    setData((d) => [newPlan, ...d]);
    resetForm();
  }

  function handleSaveEdit() {
    if (!editing) return;
    setData((prev) =>
      prev.map((p) =>
        p.id === editing.id
          ? {
              ...editing,
              planName: form.planName || editing.planName,
              planType: form.planType || editing.planType,
              price: Number(form.price || editing.price),
            }
          : p
      )
    );
    resetForm();
  }

  useEffect(() => {
    if (editing) {
      setForm({
        planName: editing.planName,
        planType: editing.planType,
        price: String(editing.price),
      });
    }
  }, [editing]);

  const table = useReactTable({
    data,
    // columns defined below so they have access to component handlers
    columns: useMemo<ColumnDef<Plan>[]>(() => {
      return [
        {
          id: "select",
          header: ({ table }) => (
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: false,
        },
        {
          accessorKey: "planName",
          header: () => <div>Plan</div>,
          cell: ({ row }) => <div className="font-medium">{row.getValue("planName")}</div>,
        },
        {
          accessorKey: "planType",
          header: "Type",
          cell: ({ row }) => <div className="capitalize">{row.getValue("planType")}</div>,
        },
        {
          accessorKey: "price",
          header: () => <div className="text-right">Price</div>,
          cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"));
            const formatted = new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            }).format(amount);
            return <div className="text-right font-medium">{formatted}</div>;
          },
        },
        {
          id: "actions",
          enableHiding: false,
          cell: ({ row }) => {
            const payment = row.original;

            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => {
                          setEditing(payment as Plan);
                    }}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      // open confirm dialog for this plan
                      setPendingDelete(payment as Plan);
                      setOpenAlert(true);
                    }}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          },
        },
      ];
    }, [setEditing]),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter plans..."
          value={(table.getColumn("planName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("planName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="ml-4 flex items-center space-x-2">
          <input
            aria-label="planName"
            value={form.planName}
            onChange={(e) => setForm((f) => ({ ...f, planName: e.target.value }))}
            placeholder="Plan name"
            className="border px-2 py-1 rounded"
          />
          <select
            value={form.planType}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                planType: e.target.value as Plan["planType"],
              }))
            }
            className="border px-2 py-1 rounded"
          >
            <option value="basic">basic</option>
            <option value="pro">pro</option>
            <option value="enterprise">enterprise</option>
          </select>
          <input
            aria-label="price"
            type="number"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            placeholder="Price"
            className="w-24 border px-2 py-1 rounded"
          />
          {editing ? (
            <>
              <Button size="sm" onClick={handleSaveEdit}>
                Save
              </Button>
              <Button size="sm" variant="ghost" onClick={resetForm}>
                Cancel
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={handleAdd}>
              Add
            </Button>
          )}
        </div>
            {/* Alert dialog for delete confirmation */}
            <AlertDialog open={openAlert} onOpenChange={(v) => {
              setOpenAlert(v);
              if (!v) setPendingDelete(null);
            }}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete plan</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete the plan{' '}
                        <span className="font-medium">{pendingDelete?.planName}</span>?
                        {' '}This action cannot be undone.
                      </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <Button variant="ghost">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button
                      onClick={() => {
                        if (pendingDelete) {
                          setData((prev) => prev.filter((p) => p.id !== pendingDelete.id));
                        }
                        setOpenAlert(false);
                        setPendingDelete(null);
                      }}
                    >
                      Delete
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

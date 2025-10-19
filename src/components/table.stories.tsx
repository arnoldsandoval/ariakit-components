import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

/**
 * A simple HTML table component.
 */
const meta = {
  title: "ui/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => (
    <Table {...args}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the table.
 */
export const Default: Story = {};

/**
 * Table with a footer showing totals or summary information.
 */
export const WithFooter: Story = {
  render: () => {
    const orders = [
      {
        order: "ORD001",
        customer: "Alice Johnson",
        product: "Laptop",
        amount: 1299.99,
      },
      {
        order: "ORD002",
        customer: "Bob Smith",
        product: "Mouse",
        amount: 29.99,
      },
      {
        order: "ORD003",
        customer: "Carol White",
        product: "Keyboard",
        amount: 89.99,
      },
      {
        order: "ORD004",
        customer: "David Brown",
        product: "Monitor",
        amount: 349.99,
      },
      {
        order: "ORD005",
        customer: "Eve Davis",
        product: "Headphones",
        amount: 199.99,
      },
    ];
    const total = orders.reduce((sum, order) => sum + order.amount, 0);

    return (
      <Table>
        <TableCaption>Recent orders with total amount.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order}>
              <TableCell className="font-medium">{order.order}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell className="text-right">
                ${order.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-bold">
              ${total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

/**
 * Table with action buttons and status badges in each row.
 */
export const WithActions: Story = {
  render: () => {
    const users = [
      {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        status: "Active",
      },
      {
        id: 2,
        username: "jane_smith",
        email: "jane@example.com",
        status: "Active",
      },
      {
        id: 3,
        username: "bob_wilson",
        email: "bob@example.com",
        status: "Inactive",
      },
    ];

    return (
      <Table>
        <TableCaption>User management table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

/**
 * Table with grouped rows showing categorized data.
 */
export const Grouped: Story = {
  render: () => {
    const expenses = {
      Travel: [
        {
          id: 1,
          description: "Flight to NYC",
          date: "2024-01-15",
          amount: 450.0,
        },
        {
          id: 2,
          description: "Hotel - 3 nights",
          date: "2024-01-15",
          amount: 540.0,
        },
        {
          id: 3,
          description: "Taxi to airport",
          date: "2024-01-18",
          amount: 45.0,
        },
      ],
      Meals: [
        {
          id: 4,
          description: "Team dinner",
          date: "2024-01-16",
          amount: 120.0,
        },
        {
          id: 5,
          description: "Business lunch",
          date: "2024-01-17",
          amount: 65.0,
        },
      ],
      Equipment: [
        { id: 6, description: "Laptop", date: "2024-01-10", amount: 1299.0 },
        { id: 7, description: "Monitor", date: "2024-01-10", amount: 349.0 },
      ],
    };

    const categoryTotals = Object.entries(expenses).map(
      ([category, items]) => ({
        category,
        total: items.reduce((sum, item) => sum + item.amount, 0),
      })
    );

    const grandTotal = categoryTotals.reduce((sum, cat) => sum + cat.total, 0);

    return (
      <Table>
        <TableCaption>Expense report by category - January 2024</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(expenses).map(([category, items]) => (
            <React.Fragment key={category}>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableCell colSpan={2} className="font-bold">
                  {category}
                </TableCell>
                <TableCell className="text-right font-bold">
                  $
                  {categoryTotals
                    .find((c) => c.category === category)
                    ?.total.toFixed(2)}
                </TableCell>
              </TableRow>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right">
                    ${item.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="font-bold">
              Grand Total
            </TableCell>
            <TableCell className="text-right font-bold">
              ${grandTotal.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

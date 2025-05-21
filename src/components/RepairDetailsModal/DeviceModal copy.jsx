import React from "react";
import { Card, CardContent } from '@mui/material';
// import { Button } from "@mui/material/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@mui/material";

export default function DeviceModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Logo"
              className="w-6 h-6"
            />
            Iphone
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <p className="font-medium">Device ID: IP12567</p>
              <p className="text-gray-500">Approved</p>
            </div>
            <p className="text-lg font-semibold">₦25,000.00</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-xs text-gray-500">Onboarding Date</p>
              <p className="text-sm font-medium">Jan. 22th 2024</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-xs text-gray-500">Expiry Date</p>
              <p className="text-sm font-medium">Dec. 22th 2024</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Issue(s)</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                Accidental Damage
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                Hardware Damage
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Team Member</p>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Mona Tech</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Customer Info</p>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">08143789883</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Claims Information</p>
            <table className="w-full mt-2 text-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Screen Damage</td>
                  <td className="p-2 text-right">₦50,000</td>
                </tr>
                <tr>
                  <td className="p-2">Battery Issue</td>
                  <td className="p-2 text-right">₦60,000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="font-medium">
                  <td className="p-2">Total</td>
                  <td className="p-2 text-right">₦110,000</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <p className="text-sm font-medium">Repair History</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Issue(s)</p>
                <p className="text-sm font-medium">Accidental Damage</p>
                <p className="text-xs text-gray-400">Dec 6, 2024</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Issue(s)</p>
                <p className="text-sm font-medium">Hardware Damage</p>
                <p className="text-xs text-gray-400">Dec 6, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

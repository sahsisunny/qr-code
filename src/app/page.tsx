"use client";
import Image from "next/image";
import QRCode, { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
const RDSIcon = "_next/image?url=%2Frds.png&w=64&q=75";
const DEFAULT_QR_CODE_VALUE = "https://staging-tinysite.realdevsquad.com/ba8fa";
export default function Home() {
  const [oldImplValue, setOldImplValue] = useState(DEFAULT_QR_CODE_VALUE);
  const [newImplValue, setNewImplValue] = useState(DEFAULT_QR_CODE_VALUE);
  return (
    <main className="w-full min-h-screen flex flex-col p-6">
      <div className="flex md:flex-row flex-col gap-2">
        <div className="w-full border p-2">
          <h1 className="text-center w-full">Old Implementation</h1>
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Enter the value"
              className="w-full p-2 border"
              value={oldImplValue}
              onChange={(e) => setOldImplValue(e.target.value)}
            />
            <button
              id="reset"
              onClick={() => setOldImplValue(DEFAULT_QR_CODE_VALUE)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Reset
            </button>
          </div>

          <QRCode
            data-testid="qrcode"
            id="qr-code"
            value={`URL: ${oldImplValue}`}
            size={256}
            includeMargin={true}
            imageSettings={{
              src: RDSIcon,
              height: 50,
              width: 50,
              excavate: true,
            }}
            renderAs="canvas"
            level="L"
          />

          <pre className="w-full bg-gray-100 p-2 rounded">
            <code>{`
          <QRCode
            data-testid="qrcode"
            id="qr-code"
            value={"URL: ${oldImplValue}"}
            size={256}
            includeMargin={true}
            imageSettings={{
              src: RDSIcon,
              height: 50,
              width: 50,
              excavate: true,
            }}
            renderAs="canvas"
            level="L"
          />
          `}</code>
          </pre>
          <strong>
            With <code>excavate: true</code>, the QR code will show white
            background behind the logo.
          </strong>
        </div>
        <div className="w-full border p-2">
          <h1 className="text-center w-full">New Implementation</h1>
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Enter the value"
              className="w-full p-2 border"
              value={newImplValue}
              onChange={(e) => setNewImplValue(e.target.value)}
            />
            <button
              id="reset"
              onClick={() => setNewImplValue(DEFAULT_QR_CODE_VALUE)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Reset
            </button>
          </div>
          <QRCodeCanvas
            data-testid="qrcode"
            id="qr-code"
            value={`URL: ${newImplValue}`}
            size={256}
            includeMargin={true}
            imageSettings={{
              src: RDSIcon,
              height: 50,
              width: 50,
              excavate: false,
            }}
            level="L"
          />
          <pre className="w-full bg-gray-100 p-2 rounded">
            <code>{`
          <QRCodeCanvas
            data-testid="qrcode"
            id="qr-code"
            value={"URL: ${newImplValue}"}
            size={256}
            includeMargin={true}
            imageSettings={{
              src: RDSIcon,
              height: 50,
              width: 50,
              excavate: false,
            }}
            level="L"
          />
          `}</code>
          </pre>
          <strong>
            With <code>excavate: false</code>, the QR code will keep the logo
            background transparent.
          </strong>
        </div>
      </div>
      <div className="w-full border p-2 flex flex-col">
        <h1 className="text-center w-full font-bold text-xl">Links</h1>
        <div className="w-full flex gap-2">
          <a
            href="https://www.npmjs.com/package/qrcode.react"
            target="_blank"
            className="p-2 bg-blue-500 text-white rounded"
          >
            Package ➡️
          </a>
          <a
            href="https://github.com/Real-Dev-Squad/tiny-site-frontend/blob/develop/src/components/QRCodeModal/index.tsx#L56-L70"
            target="_blank"
            className="p-2 bg-blue-500 text-white rounded"
          >
            GitHub Code ➡️
          </a>
          <a
            href="https://github.com/Real-Dev-Squad/tiny-site-frontend/pull/107/files#diff-8ab72a1900b8ad928193ba6a36758d006a7846b9b0558f2386ff55cd6aa4c08cR56-R70"
            target="_blank"
            className="p-2 bg-blue-500 text-white rounded"
          >
            PR ➡️
          </a>
        </div>
      </div>
    </main>
  );
}

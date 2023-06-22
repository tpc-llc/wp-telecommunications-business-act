import '@testing-library/jest-dom'
import { vi } from 'vitest'

import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./src/msw/server";

// axiosBaseConfigで読み取るグローバル変数をモックする
vi.stubGlobal('wptba', {
    '_wpnonce': 'testwpnonce'
})
vi.stubGlobal('location', {
    origin: 'http://test.com',
})

beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" })
});
beforeEach(() => {
    server.resetHandlers()
});
afterAll(() => {
    server.close()
});
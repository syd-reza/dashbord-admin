import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ExchangeType {
  USDT_TO_PM = "USDT_TO_PM",
  PM_TO_USDT = "PM_TO_USDT"
}

interface ExchangeState {
  exchangeType: ExchangeType;
}

const initialState: ExchangeState = {
  exchangeType: ExchangeType.USDT_TO_PM
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setExchangeType: (state, action: PayloadAction<ExchangeType>) => {
      state.exchangeType = action.payload;
    },
    toggleExchangeType: (state) => {
      state.exchangeType =
        state.exchangeType === ExchangeType.USDT_TO_PM
          ? ExchangeType.PM_TO_USDT
          : ExchangeType.USDT_TO_PM;
    }
  }
});

export const { setExchangeType, toggleExchangeType } = exchangeSlice.actions;
export default exchangeSlice.reducer;

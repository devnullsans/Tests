## Checklist for API Trade

- [ ] Create .env file to hide secrets
- pass envs in process params with command no extra deps
- [ ] Stop Loss Condition
- Range fixing Difference in Amount
- B>S = negative value
- S>B = positive value
- Follow until other condition meets

- [ ] ReBase DB Models & Reuse
- Historical Collection should also store corresponding averages
- Trades Collection format (opents, closets, typeset, openval, closeval, amount)

- [ ] On Demand Average Calculation
- Use math more, memory less & optimize

- [ ] History collection Reverse Order Collection
- From today till xxxx-xx-xx Date in the past

- [ ] Test WebSocket Listner
- Live market data not yet explored

- [ ] ReBase HTTP Requester

## New Orders

- [ ] historical data 15 months backdated
- [ ] only latch for last 3 months
- [ ] Interval will be day wise
- [ ] ((DC2 - DC1) / DC1)% List of this for data. Then Standard Deviation (population)
- [ ] Calculate Average of close values to get range by adding & subtracting it by SD
- [ ] Trade Take Buy condition && Check rescent close strictly less than lower limit
- [ ] Trade Take Sell condition && Check rescent close strictly greater than upper limit
- [ ] Calculate new SD & Range including latest close price & Lock it until Trade Released
- [ ] Trade Release Buy condition && Check rescent close less than lower limit
- [ ] Trade Release Sell condition && Check rescent close greater than upper limit
- [ ] After Trade Released SD Range is stale now Recalculate and check for Trade Take conditions 

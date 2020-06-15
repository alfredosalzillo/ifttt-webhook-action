# ifttt-webhook-action

A GitHub action that triggers an [IFTTT webhooks](https://ifttt.com/maker_webhooks)
event. This is useful for example when you want to trigger a IFTTT webhook after
your deployment succeeds.

# Usage

See [action.yml](https://github.com/screendriver/ifttt-action/blob/main/action.yml)

```yaml
steps:
  - uses: alfredosalzillo/ifttt-webhook-action@master
    with:
      event: your-webhook-event
      key: your-webhook-secret-key
      value1: optional-value
      value2: optional-value
      value3: optional-value
```

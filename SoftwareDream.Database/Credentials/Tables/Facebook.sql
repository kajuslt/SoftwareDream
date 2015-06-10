CREATE TABLE [Credentials].[Facebook] (
    [Id]                  INT           IDENTITY (2000000, 1) NOT NULL,
    [UserId]              INT           NULL,
    [FacebookUserId]      VARCHAR (255) NULL,
    [FacebookAccessToken] VARCHAR (10)  NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

